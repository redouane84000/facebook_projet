const express = require('express');
const router = express.Router();
const controller = require('../Controllers/Controller');

router.post('/register', controller.register);
router.post('/login', controller.login);

router.get('/ping', (req, res) => {
    db.query('SELECT 1', (err, result) => {
        if (err) {
            res.status(500).json({message: 'Erreur de connexion à la base de données'});
        }else{
            res.json({message: 'Connexion à la base de données réussie'});
        }
    });
});

router.get('/test', (req, res) => {
    console.log("test successfully");
    res.json({message: "test successfully"});
});

module.exports = router;