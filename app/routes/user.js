const express = require('express');
const router = express.Router();
//const eventEmitter = require('events').EventEmitter();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  // console.log('Time: ', Date.now());
  console.log(`Sou o middleware da Rota /user`);
  next();
});

router
  .get('/', function(req, res) {
    res.send('Get a random book');
  })
  .post('/:token', function(req, res) {
    // res.status(202).json(req.params).json(req.body);
    console.log(req.headers);
    console.log(req.headers.authorization);
    //eventEmitter.emit('start', 1, 10);
    res.status(202).send({
      token: req.params.token,
      body: req.body
    });
  })
  .put('/', function(req, res) {
    res.send('Update the book');
  });

module.exports = router;
