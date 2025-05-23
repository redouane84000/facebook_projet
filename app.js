const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const dotenv = require('dotenv');
const route = require('./Routes/Route');

dotenv.config();
const corsOptions = {
    origin: 'https://facebook-front-iota.vercel.app',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
    optionsSuccessStatus: 200   
}

app.use(cors(corsOptions));
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.method, req.url);   
    next();
});

app.use('/api', route);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
