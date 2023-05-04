const Person = require('./person');

// Your code here
class Student extends Person{
  constructor(firstName, lastName, age,major,GPA) {
   super(firstName, lastName, age)
   this.major = major;
    this.GPA= GPA;
}
  // return "`<firstName>` `<lastName>` has the higher GPA. If they're equal, return "Both students have the same GPA."
  static compareGPA(Student1,Student2) {
    if (Student1.GPA >Student2.GPA) {
      
      let winner = Student1.firstName + Student1.lastName
      return winner
    }if (Student1.GPA === Student2.GPA) {
      return "Both students have the same GPA."
    }else{
      let winner = Student2.firstName + ' '+Student2.lastName
      return winner
    }
 
    }
  }

  const chris = new Student("Chris","Wong",10,"Maths",3.5)
  const cat = new Student("Cat","Wen",10,"Maths",3.5)
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