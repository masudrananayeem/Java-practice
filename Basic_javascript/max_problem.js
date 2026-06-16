var business = 500;
var minister = 300;
var army = 10003;
if (business > minister && business > army) {
    console.log('business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger');
}   
else {
    console.log('army is bigger');
}


var max = Math.max(business, minister, army)
console.log(max);
