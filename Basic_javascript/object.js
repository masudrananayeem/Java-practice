var student = {
    id: 101,
    name: 'John',
    age: 20,
    grade: 'A',
    isGraduated: false
};

var student2 = {
    id: 102,
    name: 'Jane',
    age: 19,
    grade: 'B',
    isGraduated: false
};

student2.age = 21; // Update age
var age = student.age;

console.log(student);
console.log(student2);
console.log(age);
