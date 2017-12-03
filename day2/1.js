'use strict';
const fs = require('fs');

const result = fs
    .readFileSync('./input.txt')
    .toString()
    .split(/\n/)
    .map(row => row.split(/\t/))
    .map(row => row.filter(String))
    .filter(row => row.length > 0)
    .map(row => row.reduce((prev, curr) => {
        return {
            min: Math.min(prev.min, curr),
            max: Math.max(prev.max, curr)
        }
    }, {min: Number.MAX_VALUE, max: Number.MIN_VALUE}))
    .map(values => values.max - values.min)
    .reduce((prev, curr) => prev + curr, 0);

console.log(result);