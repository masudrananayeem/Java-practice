const student = [
    {id: 21, name: "Masud"},
    {id: 31, name: "Rana"},
    {id: 22, name: "Nayeem"},
    {id: 12, name: "sad"},
    {id: 44, name: "ibne"}
];


const names = [];

for(let i = 0; i < student.length; i++) {
    names.push(student[i].name);
}

console.log(names);


const name=student.map(s=>s.name);
const ids=student.map(s=>s.id);
const bigger=student.filter(s=>s.id>30);
const biggerOne=student.find(s=>s.id>30);

console.log(biggerOne)
console.log(bigger)
console.log(ids)
console.log(name);

