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
// var array = [0, 100, -4, 100, 100, 5, 100, 100]
// var soLon1, soLon2;
// soLon1 = array[0];
// soLon2 = array[0];
// var sum;
// var n = 0;
// for (var i = 0; i < array.length; i++) {
//     if (soLon1 < array[i + 1]) {
//         soLon1 = array[i + 1];
//     }
// }
// console.log(soLon1)
// for (var i = 0; i < array.length; i++) {
//     if (soLon1 === array[i]) {
//         n = n + 1;
//     }
// }
// console.log(n);

// if (n > 1) {
//     soLon2 = soLon1;
// } else {
//     for (var i = 0; i < array.length; i++) {
//         if (soLon2 < array[i + 1]) {
//             if (array[i + 1] !== soLon1) {
//                 soLon2 = array[i + 1];
//             }
//         }
//     }
// }
// console.log(soLon2);
// sum = soLon1 + soLon2;
// console.log(sum);

// bai 3
var array = [1, 5, 4, 7, 9, 0, -10, 13, 93, 14, 15];
var array2 = [];
var n = 0;
var hieuNhoNhat = array[1] - array[0];
for (var i = 0; i < (array.length - 1); i++) {
    for (var j = i + 1; j < array.length; j++) {
        hieu = Math.abs(array[i] - array[j]);
        if (hieuNhoNhat > hieu) {
            hieuNhoNhat = hieu;
        }
    }
}
console.log(hieuNhoNhat);
for (var i = 0; i < (array.length - 1); i++) {
    for (var j = i + 1; j < array.length; j++) {
        hieu = Math.abs(array[i] - array[j]);
        if (hieu === hieuNhoNhat) {
            array2.push([array[i], array[j]]);
        }
    }
}
console.log(array2);