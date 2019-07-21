const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./app/routes/user');

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

// console.log({ path });
//console.log({ __dirname });

// app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
