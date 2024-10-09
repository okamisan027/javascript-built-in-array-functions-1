const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  //หาค่าเฉลี่ยของคะแนนแต่ละคน
  const result = students.reduce((total, currentStudent) => {
    console.log(total + currentStudent.score);
    return total + currentStudent.score;
  }, 0);
  return result / students.length;
}

console.log(getAverageStudentScore(students)); // Output: 87.5
