const express = require('express');
const app = express();
const dotenv = require('dotenv');

const PORT = process.env.PORT || 5000;
dotenv.config({path : './config.env'});
app.use(express.json());
app.use(require('./api/create'));
app.use(require('./api/read'));
app.use(require('./api/update'));
app.use(require('./api/delete'));

app.listen(PORT,()=>{
    console.log(`server at ${PORT}`);
});