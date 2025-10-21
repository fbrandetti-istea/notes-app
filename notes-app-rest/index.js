import express from 'express';
import cors from 'cors';
import { db } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// Crear tabla si no existe
(async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS notes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT
    )
  `);
})();

// Get all notes
app.get('/api/notes', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM notes');
  res.json(rows);
});

// Create note
app.post('/api/notes', async (req, res) => {
  const { title, content } = req.body;
  await db.query('INSERT INTO notes (title, content) VALUES (?, ?)', [title.trim(), content.trim()]);
  res.json({ message: 'Note saved successfully!' });
});

app.put('/api/notes/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  await db.query('UPDATE notes SET title = ?, content = ? WHERE id = ?', [title.trim(), content.trim(), id]);
  res.json({ message: 'Note edited successfully!' });
});

// Delete note
app.delete('/api/notes/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM notes WHERE id = ?', [id]);
  res.json({ message: 'Note deleted successfully!' });
});

app.listen(8080, () => console.log('Backend running in port 8080!'));
