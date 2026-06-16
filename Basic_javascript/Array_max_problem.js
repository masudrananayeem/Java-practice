var marks = [45, 78, 89, 90, 67, 56];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log(max);   

