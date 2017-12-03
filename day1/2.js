'use strict';
const fs = require('fs');

let result = fs
    .readFileSync('./input.txt')
    .toString()
    .split('')
    .map(num => Number(num))
    .reduce((prev, curr, i, arr) => curr === (arr[i + arr.length / 2] || arr[i - arr.length / 2]) ? prev + curr : prev, 0);

console.log(result);