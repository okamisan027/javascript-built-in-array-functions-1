const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let result =  students.map (student => student.score) .reduce((sum , crr) => sum + crr ,0) 
  return result / students.length
}


console.log(getAverageStudentScore(students)) ; // Output: 87.5
