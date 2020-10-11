exports.getBootcamps = (req,res,next) => {
    res.status(200).send({success:true,data:"show all bootcamps"})

}
exports.getBootcamp = (req,res,next) => {
    res.status(200).send({success:true,data:"show all bootcamps "+req.params.id})

}
//private
exports.createBootcamp = (req,res,next) => {
    res.status(200).send({success:true,data:"create new bootcamps"})


}
//private
exports.updateBootcamp = (req,res,next) => {
    res.status(200).send({success:true,data:` update ${req.params.id}`})

}
//private
exports.deleteBootcamp = (req,res,next) => {

}

