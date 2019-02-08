const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
var store = require('../database/seed.js')

app.use(express.static(__dirname + '/../client/dist')) //root directory to serve the static files (dist in client folder, where our bundle is)
app.use(bodyParser.json());

app.get('/checkout/:productId', (req, res) => {
  var item = req.params.productId;
  store.checkInventoryList(item, (err, inventory) => {
    if (err){
      res.status(404).send("request failed")
    }
    res.status(200).send(inventory);
  });
});



app.post('/checkout/:productId', (req, res) => {
  // console.log('post request working')
  var item = req.params.productId;
  // store.updateInventory(err, item, req.body.amountBought => {
  // if (err){
  //   console.log(err)
  //   res.status(201).send('Not saved')
  //   return;
  // }
  // res.status(201).send('saved in database')
  // })
  store.updateInventory(item, req.body.amountBought) 
  res.status(201).send('data changed in database')
})


app.listen(port, () => console.log(`Our server is listening to port ${port}`))