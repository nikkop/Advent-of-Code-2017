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
    steps++;
    nextIndex >= startIndex + 3 ? input[startIndex] -= 1 : input[startIndex] +=1;
    nextIndex <= input.length - 1 ? process.nextTick(() => jump(nextIndex)) : console.log(steps);
}

jump(0);