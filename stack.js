// /https://www.acmicpc.net/problem/10828
var readline = require('readline'),
    r1 = readline.createInterface(process.stdin, process.stdout);

r1.question('반복할 횟수 : ', function (ans) {
    var input_number = Number(ans),
        command,
        arr = [];
    r1.on('line', function (line) {
        command = line.split(' ')[0];
        if (command == 'push') {
            arr.push((line.split(' ')[1]));
        } else if (command == 'pop') {
            arr.length == 0 ? console.log(-1) : console.log(arr.pop());
        } else if (command == 'size') {
            console.log(arr.length);
        } else if (command == 'empty') {
            arr.length == 0 ? console.log(1) : console.log(0);
        } else if (command == 'top') {
            arr.length == 0 ? console.log(-1) : console.log(arr[arr.length - 1]);
        }
        input_number--;
        if (input_number == 0) r1.close();
    });
    r1.on('close', function () {
        process.exit();
    });
});

