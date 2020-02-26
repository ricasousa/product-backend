const express = require(`express`);
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect(
  `mongodb://localhost:27017/nodeapp`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
require('./src/models/product');

//const product = mongoose.model(`Product`);

app.use('/api', require('./src/routes'))

app.listen(3001, _ => {
  console.log(`Listining on port 3001`);
})