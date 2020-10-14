const ErrorResponse = require("../utils/errorResponse");

const errorHandler=(err,req,res,next)=>{

    let error={...err}
 //   error.message=err.message
    console.log("error in start ",error)
    //Mongoose bad ObjectID
    if(err.name === 'CastError'){
        const message=`Resource not found with id ${error.value}`;
        error=new ErrorResponse(message,404)
    }
    //Mongoose duplicate key
    if(err.code === 11000){
        const message='Duplicate field value entered'
        error=new ErrorResponse(message,400)
    }
    //validation error
    if(err.name ==='ValidatorError'){
        const message=Object.values(error.errors).map(val => val.message)
        error =new ErrorResponse(message,400)
    }
    res.status(error.statusCode || 500).json({
        success:false,
        error:(error.message || "Server error")+" not caught"
    })
}

module.exports=errorHandler