'use strict';
const fs = require('fs');

const result = fs
    .readFileSync('./input.txt')
    .toString()
    .split(/\n/)
    .map(row => row.split(/\t/))
    .map(row => row.filter(String))
    .filter(row => row.length > 0)
    .map(row => row.map(Number))
    .map(row => row.filter((num, i, arr) => arr.some(num2 => (num % num2 === 0 || num2 % num === 0) && num !== num2)))
    .map(row => row.reduce((prev, curr) => Math.max(prev, curr) / Math.min(prev, curr)))
    .reduce((prev, curr) => prev + curr)

console.log(result);