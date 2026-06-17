const num = [3, 5, 6, 8];
const output = [];

for (let i = 0; i < num.length; i++) {
    const element = num[i];
    const result = element * element;
    output.push(result);
}

//console.log(output);

function sqr(element){
    return element*element;
}


const rul = num.map(function sqr(element, index, array){
    return element*element;
}
);

console.log(rul);

const Number = [3, 5, 6, 8, 13, 13];
const rel = Number.map(x => x*x);
console.log(rel);

//Filter

const big = Number.filter(x => x>5);

const there = Number.find(x => x>5);
console.log(big);
console.log(there)