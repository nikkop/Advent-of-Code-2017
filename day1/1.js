'use strict';
const fs = require('fs');

const result = fs
    .readFileSync('./input.txt')
    .toString()
    .split('')
    .map(num => Number(num))
    .reduce((prev, curr, i, arr) => curr === (arr[i + 1] || arr[0]) ? prev + curr : prev, 0);

console.log(result);