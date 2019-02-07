const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist')) //root directory to serve the static files (dist in client folder, where our bundle is)

app.get('/', (req, res) => {
  console.log("get request working")
  res.status(200).end()
});

app.post('/', (req, res) => {
  console.log('post request working')
  res.status(201).end()
})


app.listen(port, () => console.log(`Our server is listening to port ${port}`))