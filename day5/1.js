'use strict';

const fs = require('fs');
const input = fs
    .readFileSync('./input.txt')
    .toString()
    .split('\n')
    .map(val => Number(val));

let steps = 0;
const jump = (startIndex) => {
    const nextIndex = startIndex + input[startIndex];
    input[startIndex] = input[startIndex] + 1;
    steps++;
    nextIndex <= input.length - 1 ? process.nextTick(() => jump(nextIndex)) : console.log(steps);
}

jump(0);