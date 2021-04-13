var array = [11, 2, 8, 10, 5, 99, 1, 8, 9]
var array1 = [],
    array2 = [],
    array3 = [],
    newArray = []
array1 = array.slice(0, 3);
array2 = array.slice(3, 6);
array3 = array.slice(6, 9);
console.log(array1);
console.log(array2);
console.log(array3);
for (var i = 0; i < 3; i++) {
    newArray.push(array1[i], array2[i], array3[i]);
}
console.log(newArray);