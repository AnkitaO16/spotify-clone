const pool = require('../config/db');

const createPlaylist = async (req, res) => {
  const { title } = req.body;
  const userId = req.user.id;

  if (!title) return res.status(400).json({ message: 'Title is required' });

  try {
    const result = await pool.query(
      'INSERT INTO playlists (user_id, title) VALUES ($1, $2) RETURNING *',
      [userId, title]
    );
    return res.status(201).json({ playlist: result.rows[0] });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

const getUserPlaylists = async (req, res) => {
  const userId = req.user.id;

  try {
    const result = await pool.query(
      'SELECT * FROM playlists WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );
    return res.json({ playlists: result.rows });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createPlaylist, getUserPlaylists };
