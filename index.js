const express=require('express');
const dotenv=require('dotenv')

//load env vars
dotenv.config({path:'./config/config.env'})
const app=new express();

const PORT=process.env.PORT||6000;
app.listen(PORT,console.log(`Server running on ${PORT}`));