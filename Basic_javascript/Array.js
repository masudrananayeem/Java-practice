var friendage= [23, 15, 27, 37];

var sonaliAge= friendage[2];

friendage[1]=21;

var position =friendage.indexOf(27);

console.log(friendage.length)
friendage.push(15);

console.log(friendage)

console.log(friendage[3]);
console.log(sonaliAge);

console.log(position);
friendage.pop();
console.log(friendage);

friendage.unshift(4444);
console.log(friendage);