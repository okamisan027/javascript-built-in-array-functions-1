const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getTodoTopics(todos) {
  // Start coding here
  //เอาเฉพาะ topic ออกมาเป็นอาเรย์ใหม่
  //ใช้ .map //***********ติดไว้ก่อน */
  let result = todos.map((eachTodo) => {
    return eachTodo.topic.toString();
  });

  return result;
}

getTodoTopics(todos);
console.log(getTodoTopics(todos));

/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/
