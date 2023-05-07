const Person = require('./person');

// Your code here
class Student extends Person{
  constructor(firstName, lastName,major,GPA) {
   super(firstName, lastName)
   this.major = major;
    this.GPA= GPA;
}
  // return "`<firstName>` `<lastName>` has the higher GPA. If they're equal, return "Both students have the same GPA."
  static compareGPA(Student1,Student2) {
    if (Student1.GPA >Student2.GPA) {
      
      let winner = `${Student1.firstName} ${Student1.lastName} has the higher GPA.`
      return winner
    }if (Student1.GPA === Student2.GPA) {
      return "Both students have the same GPA."
    }else{
      let winner = `${Student2.firstName} ${Student2.lastName} has the higher GPA.`
      return winner
    }
 
    }
  }

  const chris = new Student("Chris","Wong","Maths",3.5)
  const cat = new Student("Cat","Wen","Maths",3.0)
  let result = Student.compareGPA(chris, cat)
  console.log(result)
  console.log(cat.GPA)
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}