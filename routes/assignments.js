const app = require('express');

const router = app.Router();

const mongoose = require('mongoose');



//Course model
var AssignmentSchema = new mongoose.Schema({
    name: String,
    description: String,
    percentage: String
 })

 var Assignment = mongoose.model('Assignment', AssignmentSchema)

 router.get('/', function (req, res) {
    Assignment.find({}, function (err, assignments) {
       res.send(assignments)
    })
 })
 
 router.post('/', function (req, res) {
    Assignment.create(req.body, function (err, assignments) {
       res.send(assignments)
    })
 })
 
 router.delete('/:_id', function (req, res) {
    Assignment.deleteOne({ _id: req.params._id }, function (err, result) {
       res.send(result)
    })
 })
 
 router.put('/', function (req, res) {
   const filter = {name:req.body.name};
   const update = {percentage:req.body.percentage,description:req.body.description};
    Assignment.findOneAndUpdate(filter,update, function (err, result) {
       res.send(result)
    })
 })
 
 
 router.get('/search/:keyword', function (req, res) {
    Assignment.find({ name: req.params.keyword }, function (err, result) {
       res.send(result)
    })
 })

 router.get('/:_id', function (req, res) {
   Assignment.find({ _id: req.params.id }, function (err, result) {
      res.send(result)
   })
})

module.exports = router;
