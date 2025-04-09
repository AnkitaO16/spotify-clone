// const express = require('express');
// const { addSong, getSongsByPlaylist } = require('../controllers/songController');
// const authMiddleware = require('../middleware/authMiddleware');

// const router = express.Router();

// router.post('/', authMiddleware, addSong);
// router.get('/:id/songs', authMiddleware, getSongsByPlaylist);

// module.exports = router;
const express = require('express');
const { addSong } = require('../controllers/songController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

// Handle audio file upload
router.post('/upload', authMiddleware, upload.single('audio'), async (req, res) => {
  const { playlist_id, title, artist } = req.body;
  const audio_url = `/uploads/${req.file.filename}`;

  if (!playlist_id || !title || !audio_url) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const pool = require('../config/db');
    const result = await pool.query(
      `INSERT INTO songs (playlist_id, title, artist, audio_url)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [playlist_id, title, artist || null, audio_url]
    );
    return res.status(201).json({ song: result.rows[0] });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
