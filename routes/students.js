var express = require('express');
var router = express.Router();
const fs = require('fs');

const studentInfo = JSON.parse(fs.readFileSync('./data/students.json'));
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
  
  res.send(studentInfo)
});

router.get('/:id', function (req, res, next) {
  oneStudent = "";
  console.log("***")
  console.log(`Params: ${req.params.id}`)
  console.log(req.query)
  console.log("***")
  if (req.params.id === 'search')
  {
    //res.send("Search requested")
    const searchParam = req.query
    console.log(`Search Param: ${searchParam}`)
    const searchTerm = searchParam.searchTerm
    console.log(`Search Term: ${searchTerm}`)
    //const searchTerm1 = searchParam[1].searchTerm
    //console.log(`Search Term[1]: ${searchTerm1}`)
    if (searchTerm === undefined)
    {
      oneStudent = "Improperly defined search"
    }
    else
    {
      //oneStudent = studentInfo.find(student => student.studentName === req.query.searchTerm)
      
      //oneStudent = studentInfo.find(student => {
      //  const S1 = student.studentName
      //  const S2 = req.query.searchTerm
      //  console.log(`S1 : ${S1}`)
      //  console.log(`S2 : ${S2}`)
        //const retVal = S1.contains(req.query.searchTerm) == true
      //  const retVal = S1.indexOf(S2) 
      //  console.log(`retVal ${retVal}`)
      //  return retVal})
      oneStudent = studentInfo.filter(student => student.studentName.indexOf(req.query.searchTerm) !== -1)
    }
  }
  else
  {
    oneStudent = studentInfo.find(student => student.studentId === Number(req.params.id))
  }
  console.log(oneStudent)
  if (oneStudent === undefined)
  {
  res.send("Student Record not found")
  }
  else
  {
  res.send(oneStudent)
  }
});

module.exports = router;