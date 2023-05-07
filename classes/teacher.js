const Person = require('./person');


// Your code here
class Teacher extends Person{
  constructor(firstName, lastName,subject,yearsOfExperience) {
   super(firstName, lastName)
   this.subject = subject;
    this.yearsOfExperience= yearsOfExperience;
  }
  static combinedYearsOfExperience(teacherlist) {
    let sum = 0
    //let addsum = (value) => {sum += value.yearsOfExperience}
    teacherlist.forEach((teacher) => {sum += teacher.yearsOfExperience })
    return sum
  
  }
}
const chris = new Teacher("Chris","Wong","Maths",3.5)
const cat = new Teacher("Cat","Wen","Maths",10)
let result = Teacher.combinedYearsOfExperience([chris, cat])
console.log(result)
console.log(cat.yearsOfExperience)
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}