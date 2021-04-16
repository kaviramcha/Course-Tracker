let studentName = ' Cole';

const _course = {
  'Medicine' : {
    name: 'Medicine',
    subjects: ['Chemistry','Biology', 'Physics','Maths'],
    universities: ['University of Cambridge','University of Oxford','Kings College of London','Imperial College of London']
  },
    'Law ': {
    name: 'Law',
    subjects: ['Politacal Science','English', 'History','Maths'],
    universities: ['University of Edinburgh','University of Kent','Kings College of London','Durham University']
  },
    'Software': {
    name: 'Software',
    subjects: ['English','Art and Design', 'Computing','Maths'],
    universities: ['University of Cambridge','University of Edinburgh','Kings College of London','Imperial College of London']
  },
  get courseView() {



  let selectedCourse = randomGen(courseChoice);
  let selectedSubjects = this[selectedCourse].subjects[randomNum()];
  let selectedUniversities = this[selectedCourse].universities[randomNum()];
console.log(`${studentName} has been offered 3 choices.${studentName} choose  to do ${selectedCourse}. For this course you will need to focus on ${selectedSubjects}. The best university for you to get the degree of your choice would be  ${selectedUniversities}. ` );   
  }
  }
const courseChoice = ['Medicine', 'Law', 'Software'];

function randomNum() {
  return Math.floor(Math.random() * 4);
};
   let randomGen = courseChoice => {
    return courseChoice[Math.floor(Math.random()*courseChoice.length)]
   }

_course.courseView;