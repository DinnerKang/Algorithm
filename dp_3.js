//https://www.acmicpc.net/problem/1912

var readline = require('readline'),
    r1 = readline.createInterface(process.stdin, process.stdout);

r1.question('입력 : ', function (n) {
    r1.question('2번째 : ', function (ans) {
        ans = ans.split(' ');
        var data = [];
        var temp;
        for(var i=0; i<n; i++){
            data[i] = 0;
            ans[i] = Number(ans[i]);
        }
        data[0] = ans[0];
        temp = data[0];
        for(i=1; i<n; i++){
            data[i] = Math.max(data[i-1]+ans[i],ans[i]);
            console.log(data[i], temp);
            temp = Math.max(data[i], temp);
        }
        console.log(temp);
    });
});

r1.on('close', function () {
    process.exit();
});


/*백준 디버그용
var fs = require('fs');
var stdin = fs.readFileSync('/dev/stdin', 'utf8');
var input = stdin.match(/[^\r\n]+/g);

var n = parseInt(input[0], 10);
var ans = input[1].split(' ');
var data = [];
var temp;
for(var i=0; i<n; i++){
    data[i] = 0;
    ans[i] = Number(ans[i]);
}
data[0] = ans[0];
temp = data[0];
for(i=1; i<n; i++){
    data[i] = Math.max(data[i-1]+ans[i],ans[i]);
    temp = Math.max(data[i], temp);
}
console.log(temp);*/