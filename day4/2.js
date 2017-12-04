'use strict';

const fs = require('fs');

const input = fs
    .readFileSync('./input.txt')
    .toString()
    .split('\n')
    .map(row => row.split(' '))
    .map(row => row.map(word => word.split('').sort().join('')))
    .filter(row => !row.some((word, i, arr) => arr.includes(word, i + 1)));

console.log(input.length);
