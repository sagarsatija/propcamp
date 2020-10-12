const mongoose=require('mongoose');
const connectDB=async () => {
   try{ const conn=await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    });
   }
   catch(err){
    console.log(err)
   }
    console.log("MongoDb connected")

}

module.exports=connectDB;