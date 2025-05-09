const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../Models/Model');

const register = (req, res) => {
    const { prenom, nom, email, password } = req.body;
    console.log(prenom, nom, email, password);
   bcrypt.hash(password, 10, (err,hashpassword) => {
    if (err) return res.status(500).json({ message: 'Error hashing password' });

    userModel.createUser(prenom, nom, email, hashpassword, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error creating user' });
        res.status(200).json({ message: 'User created successfully' });
    });
});
};

const login = (req, res) => {
    const { email, password } = req.body;

    userModel.findUserByEmail(email, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error finding user' });
        if (result.length === 0) return res.status(401).json({ message: 'Invalid email' });

        const user = result[0];
        console.log('Mot de passe enclair :', password, user.password,user );


        console.log('Mot de passe en base :', user.password);
        bcrypt.compare(password, user.password, (err, ismatched) => {
            console.log('Mot de passe enclair :', password, user.password);
            if (err) return res.status(500).json({ message: 'Error comparing password' });
            if (!ismatched) return res.status(401).json({ message: 'Invalid password' });

        const token = jwt.sign({ id: user.id, email:user.email },"secret key",{expiresIn: '1h'});
            res.json({message: "login successfully", token});
        });
    });
};



module.exports = { register, login };
