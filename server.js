const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoints
app.get('/api', (req, res) => {
  res.json({ message: 'GET request received' });
});

app.post('/api', (req, res) => {
  res.json({ message: 'POST request received', data: req.body });
});

app.put('/api', (req, res) => {
  res.json({ message: 'PUT request received', data: req.body });
});

app.delete('/api', (req, res) => {
  res.json({ message: 'DELETE request received' });
});

app.patch('/api', (req, res) => {
  res.json({ message: 'PATCH request received', data: req.body });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
