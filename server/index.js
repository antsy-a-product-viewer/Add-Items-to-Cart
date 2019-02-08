const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
var store = require('../database/seed.js')

app.use(express.static(__dirname + '/../client/dist')) //root directory to serve the static files (dist in client folder, where our bundle is)
app.use(bodyParser.json());

app.get('/checkout/:productId', (req, res) => {
  console.log("get request working")
  //req.params
  store.checkInventoryList((err, inventory) => {
    if (err){
      console.log(err, 'this is err')
      console.log(inventory, 'this is inveotyr')
      res.status(404).send("request failed")
    }
    res.status(200).send(inventory);
  });
  // res.status(201).send('user' + req.params.productId)
});



app.post('/checkout/:productId', (req, res) => {
  console.log('post request working')
})


app.listen(port, () => console.log(`Our server is listening to port ${port}`))