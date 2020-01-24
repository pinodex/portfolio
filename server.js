const port = process.env.PORT || 3000;

const express = require('express');
const path = require('path');

const app = express();

app.disable('x-powered-by');

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port);
