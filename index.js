const express=require('express');
const dotenv=require('dotenv')
const bootcamps=require('./routes/bootcamps')
//const logger=require('./middleware/logger')
const connectDB=require('./config/db')
const morgan=require('morgan');
//load env vars
dotenv.config({path:'./config/config.env'})

connectDB();

const app=new express();

//Dev logging middleware
if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'));
}
app.use(express.json())
app.use('/api/v1/bootcamps',bootcamps);


const PORT=process.env.PORT||6000;
const server=app.listen(PORT,console.log(`Server running on ${PORT}`));
process.on('unhandledRejection',(err,promise)=>{
    console.log(err.message)
    server.close(()=> process.exit(1))
})