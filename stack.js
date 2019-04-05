// /https://www.acmicpc.net/problem/10828
var readline = require('readline'),
    r1 = readline.createInterface(process.stdin, process.stdout),
    input_number,
    arr = [];

function stackPush(data) {
    arr.push(data);
}

function stackPop() {
    arr.length == 0 ? console.log(-1) : console.log(arr.pop());
}

function stackSize() {
    console.log(arr.length);
}

function stackEmpty() {
    arr.length == 0 ? console.log(1) : console.log(0);
}

function stackTop() {
    arr.length == 0 ? console.log(-1) : console.log(arr[arr.length - 1]);
}

r1.question('반복할 횟수 : ', function (ans) {
    input_number = Number(ans);
});

r1.on('line', function (line) {
    var command = line.split(' ')[0];
    if (command == 'push') {
        stackPush(line.split(' ')[1]);
    } else if (command == 'pop') {
        stackPop();
    } else if (command == 'size') {
        stackSize();
    } else if (command == 'empty') {
        stackEmpty();
    } else if (command == 'top') {
        stackTop();
    }
    command = null;
    input_number--;
    if (input_number == 0) r1.close();
});

r1.on('close', function () {
    process.exit();
});