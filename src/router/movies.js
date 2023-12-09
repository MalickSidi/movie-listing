const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({msg: 'it is working'})
})

module.exports = router