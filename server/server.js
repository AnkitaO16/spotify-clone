const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const songRoutes = require('./routes/songRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`DB Connected: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send('DB Connection failed');
  }
});

app.use('/api/auth', authRoutes);
const authMiddleware = require('./middleware/authMiddleware');

app.get('/api/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Authorized!', userId: req.user.id });
});

app.use('/api/playlists', playlistRoutes);

app.use('/api/songs', songRoutes);

app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
