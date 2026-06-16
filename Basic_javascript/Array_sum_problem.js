var num = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < num.length; i++) {
    var element = num[i];
    sum = sum + element;
}
console.log(sum);


//fuunction
function arraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [10, 20, 30, 40, 50];
var result = arraySum(numbers);
console.log(result);

var total = arraySum([100, 200, 300, 400, 500]);
console.log(total);
