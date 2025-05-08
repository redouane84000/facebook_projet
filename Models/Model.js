const db = require('../Config/.db');

const createUser = (prenom, nom, email, hashPassword, callback) => {
    const sql = `INSERT INTO formulaire (prenom, nom, email, password) VALUES (?, ?, ?, ?)`;
    db.query(sql, [prenom, nom, email, hashPassword], callback);
};

const findUserByEmail = (email, callback) => {
    const sql = `SELECT * FROM formulaire WHERE email = ?`;
    db.query(sql, [email], callback);
};


module.exports = { createUser, findUserByEmail };