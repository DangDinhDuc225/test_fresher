var array = [11, 2, 8, 10, 5, 99, 1, 8, 9]
var array1 = [],
    array2 = [],
    array3 = [],
    newArray = []
var n = array.length;
console.log(n);
var m = n / 3;
array1 = array.slice(0, m);
array2 = array.slice(m, (2 * m));
array3 = array.slice((2 * m), (3 * m));
console.log(array1);
console.log(array2);
console.log(array3);
for (var i = 0; i < 3; i++) {
    newArray.push(array1[i], array2[i], array3[i]);
}
console.log(newArray);

// bai 2