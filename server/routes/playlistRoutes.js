const express = require('express');
const { createPlaylist, getUserPlaylists } = require('../controllers/playlistController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createPlaylist);
router.get('/', authMiddleware, getUserPlaylists);

module.exports = router;
