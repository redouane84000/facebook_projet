const express = require('express');
const router = express.Router();
const controller = require('../Controllers/Controller');

router.post('/register', controller.register);
router.post('/login', controller.login);

router.get('/test', (req, res) => {
    console.log("test successfully");
    res.json({message: "test successfully"});
});

module.exports = router;