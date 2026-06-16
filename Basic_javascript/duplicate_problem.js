var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 8, 9, 20, 2, 22, 23, 2, 25, 26, 7, 28, 30];
var uniqueIds = [];
for (var i = 0; i < ids.length; i++) {
    var element = ids[i];
    if (uniqueIds.indexOf(element) == -1) {
        uniqueIds.push(element);
    }
}
console.log(uniqueIds);
