const router = require('express').Router();

const { name, version } = require('../../package');
const { getDerDieDasRadom } = require('../controllers/random-word-controller');

router.get('/', (_, res) =>
    res.json({
        name,
        version,
    })
);

router.get('/derdiedas', getDerDieDasRadom);

module.exports = router;
