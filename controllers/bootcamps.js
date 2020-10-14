const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Bootcamp = require("./../models/Bootcamp");
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res
    .status(200)
    .send({ success: true, count: bootcamps.length, data: bootcamps });
});
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.findById(req.params.id);

  console.log("0 bootcamps");
  if (!bootcamps)
     next(
      new ErrorResponse(`No bootcamp found with id ${req.params.id}`, 404)
    );

  res.status(200).send({ success: true, data: bootcamps });
});
//private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).send({ success: true, data: bootcamp });
});
//private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamps) {
    return res.status(400).send({ success: false, data: "no such value" });
  }
  res.status(200).send({ success: true, data: bootcamp });
});
//private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  res.status(200).send({ success: true, data: {} });
});
