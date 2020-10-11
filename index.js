const express=require('express');
const dotenv=require('dotenv')
const bootcamps=require('./routes/bootcamps')
//load env vars
dotenv.config({path:'./config/config.env'})
const app=new express();

app.use('/api/v1/bootcamps',bootcamps);


const PORT=process.env.PORT||6000;
app.listen(PORT,console.log(`Server running on ${PORT}`));