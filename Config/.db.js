const dotenv = require('dotenv');
const mysql = require('mysql2');



dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});


db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        setTimeout(handleDisconnect, 2000);
    }else{
        console.log('Connexion à la base de données réussie');
    }
}); 

db.on('error', (err) => {
    console.error('Erreur de connexion à la base de données:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('La connexion à la base de données a été perdue. Tentative de reconnexion...');
         handleDisconnect();
    }else{
        throw err;
    }
}); 








module.exports = db;