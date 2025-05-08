const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const dotenv = require('dotenv');
const route = require('./Routes/Route');

dotenv.config();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.method, req.url);   
    next();
});

app.use('/api', route);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
