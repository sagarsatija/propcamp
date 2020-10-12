const Bootcamp=require('./../models/Bootcamp')
exports.getBootcamps = async (req,res,next) => {
    try{
        const bootcamps=await Bootcamp.find()
        res.status(200).send({success:true,count:bootcamps.length,data:bootcamps})
    }catch(err){
        res.status(400).send(err.message)
    }

}
exports.getBootcamp = async (req,res,next) => {
    try {
        const bootcamps=await Bootcamp.findById(req.params.id)
        res.status(200).send({success:true,count:bootcamps.length,data:bootcamps})
        if(!bootcamps){
            return res.status(400).send({succes:false,data:"no such value"})
        }
    }
    catch(err){
    res.status(404).send({success:false,data:err.message})
    }
} 
//private
exports.createBootcamp = async (req,res,next) => {
try{
    const bootcamp=await Bootcamp.create(req.body)
   res.status(201).send({success:true,data:bootcamp})
} catch(err){
    res.status(400).json({success:false})
}

}
//private
exports.updateBootcamp = async (req,res,next) => {
try{
    const bootcamp=await Bootcamp.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    })
    res.status(200).send({success:true,data:bootcamp})
    if(!bootcamps){
        return res.status(400).send({success:false,data:"no such value"})
    } 
    } 
    catch(err){
        res.status(400).json({success:false})
    }
}
//private
exports.deleteBootcamp = async (req,res,next) => {
    const bootcamp=await Bootcamp.findByIdAndDelete(req.params.id);
    res.status(200).send({success:true,data:{}})
} 

