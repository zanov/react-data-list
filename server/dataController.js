const fs = require('fs');

class DataController {
  constructor() {
    this.dataFilePath = `${__dirname}/data.json`;
  }

  getAllData(req, res) {
    fs.readFile(this.dataFilePath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Error reading data file.');
      } else {
        res.json(JSON.parse(data));
      }
    });
  }

  getDataItem(req, res) {
    fs.readFile(this.dataFilePath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Error reading data file.');
      } else {
        const itemId = parseInt(req.params.id);
        const parsedData = JSON.parse(data);
        const item = parsedData.payment_transactions.find(
          (transaction) => transaction.id === itemId,
        );

        if (item) {
          return res.json(item);
        } else {
          res.status(404).json({message: 'Item not found'});
        }
      }
    });
  }
}

module.exports = DataController;
