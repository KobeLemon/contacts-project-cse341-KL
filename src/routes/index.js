const router = require('express').Router();

router.get('/', (req, res) => (res.send('Hello World!')));

router.use('/users', require('./user'));

module.exports = router;