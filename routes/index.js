var express = require('express');
var router = express.Router();
var formatDistanceToNow = require('date-fns/formatDistanceToNow');

const messages = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message board', messages: messages, format: formatDistanceToNow });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', (req, res) => {
  const newMessage = {
    text: req.body.message,
    user: req.body.author,
    added: new Date()
  };
  messages.push(newMessage);
  res.redirect('/');
})

module.exports = router;
