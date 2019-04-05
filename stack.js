// /https://www.acmicpc.net/problem/10828
var readline = require('readline');

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var input_number = null,
    arr = [];
r1.on('line', function (line) {
    if (input_number == null) {
        input_number = line;
    } else {
        var command = line.split(' ')[0];
        var arr_len = arr.length;
        if (command == 'push') {
            arr.push(line.split(' ')[1]);
        } else if (command == 'pop') {
            if (arr_len == 0) {
                console.log(-1);
            } else {
                console.log(arr.pop());
            }
        } else if (command == 'size') {
            console.log(arr_len);
        } else if (command == 'empty') {
            if (arr_len == 0) {
                console.log(1);
            } else {
                console.log(0);
            }
        } else if (command == 'top') {
            if (arr_len == 0) {
                console.log(-1);
            } else {
                console.log(arr[arr_len - 1]);
            }
        }
        input_number--;
        if (input_number == 0) {
            r1.close();
        }
    }
});
r1.on('close', function () {
    process.exit();
});