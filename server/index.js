/* eslint-disable prefer-const */
const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const store = require('../database/seed.js');

app.use(express.static(`${__dirname}/../client/dist`)); // root directory to serve the static files (dist in client folder, where our bundle is)
app.use(bodyParser.json());

app.get('/checkout/:productId', (req, res) => {
  let item = req.params.productId;
  store.checkInventoryList(item, (err, inventory) => {
    if (err) {
      res.status(404).send('request failed');
    }
    res.status(200).send(inventory);
  });
});


// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Our server is listening to port ${port}`));
