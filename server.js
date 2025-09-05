const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/submit', (req, res) => {
  const submission = req.body;
  const filePath = path.join(__dirname, 'admissions.json');
  let allData = [];
  if (fs.existsSync(filePath)) {
    allData = JSON.parse(fs.readFileSync(filePath));
  }
  allData.push(submission);
  fs.writeFileSync(filePath, JSON.stringify(allData, null, 2));
  res.json({ success: true });
});

app.get('/submissions', (req, res) => {
  const filePath = path.join(__dirname, 'admissions.json');
  if (!fs.existsSync(filePath)) return res.json([]);
  res.json(JSON.parse(fs.readFileSync(filePath)));
});

app.listen(PORT, () => {
  console.log(`Server running! Visit: http://localhost:${PORT}/submissions`);
});