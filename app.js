const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./app/routes/user');
// const sequelize = require('./config');
const User = require('./models/user');

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/test/:userId', (req, res) => {
  res.status(202).send({
    message: `OK`,
    params: req.params,
    body: req.body
  });
});

app.use('/user', userRouter);

app.use(express.static('app/index.html'));

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');

//     sequelize.close();
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// Create a new user
// User().add('Ricardo', 'Sousa', 'a@a.a').then(data => {
//   console.log("Auto-generated ID:", data);
// });

// console.log({ path });
//console.log({ __dirname });

// app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
