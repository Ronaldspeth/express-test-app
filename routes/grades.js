var express = require('express');
var router = express.Router();
const fs = require('fs');

const studentData = JSON.parse(fs.readFileSync('./data/studentData.json'));
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  //fs.readFile('./data/students.json', (err, json) => {
  //  let obj = JSON.parse(json);
  //  res.json(obj);
  //});
  //res.send(
  //  'students'
  //);
  
  res.send("A student id is rqquired.")
});

router.get('/:id', function (req, res, next) {
  //oneStudent = "";
  //console.log("***")
  console.log(`Params: ${req.params.id}`)
  //console.log(req.query)
  console.log("***")
  
  const oneStudent = studentData.filter(student => student.studentId === Number(req.params.id))
  
  console.log(oneStudent)
  if ((oneStudent === undefined) || (oneStudent.length < 1))
  {
  res.send("No grades found for Student.")
  }
  else
  {
  res.send(oneStudent)
  }
});

module.exports = router;