'use strict';

const fs = require('fs');

const input = fs
    .readFileSync('./input.txt')
    .toString()
    .split('\n')
    .map(row => row.split(' '))
    .filter(pass => !pass.some((word, i) => pass.includes(word, i + 1)));

console.log(input.length);