console.log('Hello World');


// forEach vs. for-loop

var people = ['James', 'Jacob', 'Jean', 'Jane', 'John'];

/*
1. James
2. Jacob
3. Jean
..
*/

// for loop

for (var i=0; i < people.length; i++) {
	console.log((i + 1) + '.' + people[i]);
}

// forEach

people.forEach(function (person, index) {
	console.log((index + 1) + '. ' + person);
});



var students = [
		{
			name: 'James',
			school: 'NYC Prep'
		},
		{
			name: 'Jane',
			school: 'Thinkful'
		}
];


students.forEach(function (student) {
	console.log(student.name + ' attends ' + student.school);
});

/* students[i].name + ' attends ' + students[i].school

function fizzBuzz(countTo) {
  // your code here
  var result = [];
  for (var i=0; i <= countTo; i++){
    if (i % 15 === 0){
      result.push('fizzbuzz');
  } 
    else if (i % 5 === 0) {
      result.push('buzz');
  } 
    else if (i % 3 === 0) {
      result.push('fizz');
  } 
    else {
      result.push(i);
  }
 }
  
  console.log(result);
}
