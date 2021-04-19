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
console.log(`${studentName} has cleared your exams with a wonderful score.Based on your score  ${studentName} can opt choose  to do ${selectedCourse}.
For this course you will need to focus on ${selectedSubjects}. For you to be a successful in your field ${selectedCourse}I would suggest you to apply in  ${selectedUniversities}, where you will be able to get the best coaching. ` );   
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
