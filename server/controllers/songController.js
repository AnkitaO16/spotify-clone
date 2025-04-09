const pool = require('../config/db');

const addSong = async (req, res) => {
  const { playlist_id, title, artist, audio_url } = req.body;

  if (!playlist_id || !title || !audio_url) {
    return res.status(400).json({ message: 'playlist_id, title, and audio_url are required' });
  }

  try {
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
};

const getSongsByPlaylist = async (req, res) => {
  const playlistId = req.params.id;

  try {
    const result = await pool.query(
      `SELECT * FROM songs WHERE playlist_id = $1 ORDER BY created_at DESC`,
      [playlistId]
    );
    return res.json({ songs: result.rows });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { addSong, getSongsByPlaylist };
