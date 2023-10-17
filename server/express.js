const express = require('express');
const app = express();
const fs = require('fs');

app.get('/api/get-data', (req, res) => {
  fs.readFile(`${__dirname}/data.json`, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data file.');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.get('/api/data-items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = data.payment_transactions.find((transaction) => transaction.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({message: 'Item not found'});
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
