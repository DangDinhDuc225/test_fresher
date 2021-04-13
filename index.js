// var array = [11, 2, 8, 10, 5, 99, 1, 8, 9]
// var array1 = [],
//     array2 = [],
//     array3 = [],
//     newArray = []
// var n = array.length;
// console.log(n, "kjkjkj");
// var m = n / 3;
// array1 = array.slice(0, m);
// array2 = array.slice(m, (2 * m));
// array3 = array.slice((2 * m), (3 * m));
// console.log(array1);
// console.log(array2);
// console.log(array3);
// for (var i = 0; i < m; i++) {
//     newArray.push(array1[i], array2[i], array3[i]);
// }
// console.log(newArray);

// bai 1, khong dung slice
// var array = [11, 2, 8, 10, 5, 99, 1, 8, 9];
// var newArray = [];
// var n = array.length;
// var m = n / 3;
// for (var i = 0; i < m; i++) {
//     newArray.push(array[i], array[(i + m)], array[(2 * m)])
// }
// console.log(newArray);

// bai 2
var array = [0, 100, -4, 8, 143, 5, 99, 100]
var soLon1, soLon2;
soLon1 = array[1];
soLon2 = array[1];
var sum;
for (var i = 0; i < array.length; i++) {
    if (soLon1 < array[i + 1]) {
        soLon1 = array[i + 1];
    }
}
console.log(soLon1);

for (var i = 0; i < array.length; i++) {
    if (soLon2 < array[i + 1]) {
        if (array[i + 1] !== soLon1) {
            soLon2 = array[i + 1];
        }
    }
}
console.log(soLon2);
sum = soLon1 + soLon2;
console.log(sum);