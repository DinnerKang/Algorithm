// https://www.acmicpc.net/problem/1463
var readline = require('readline'),
    r1 = readline.createInterface(process.stdin, process.stdout);

r1.question('입력 : ', function (ans) {
    
    var n = 1000000;
    var arr = [];
    for(var i=0; i<=n; i++){
        arr[i]= 0;
    }
    arr[1] = 0;

    for(i=2; i<=n;i++){
        arr[i] = arr[i-1] +1;
        if(i%2 ==0){
            arr[i] = Math.min(arr[i], arr[i/2]+1);
        }
        if(i%3==0){
            arr[i] = Math.min(arr[i], arr[i/3]+1);
        }
    }
    console.log(arr[ans]);
});

r1.on('close', function () {
    process.exit();
});


// 백준 디버그용
var fs = require('fs');
var stdin = fs.readFileSync('/dev/stdin', 'utf8');
var input = stdin.match(/[^\r\n]+/g);


var ans = parseInt(input[0], 10);
    
    var n = 1000000;
    var arr = [];
    for(var i=0; i<=n; i++){
        arr[i]= 0;
    }
    arr[1] = 0;

    for(i=2; i<=n;i++){
        arr[i] = arr[i-1] +1;
        if(i%2 ==0){
            arr[i] = Math.min(arr[i], arr[i/2]+1);
        }
        if(i%3==0){
            arr[i] = Math.min(arr[i], arr[i/3]+1);
        }
    }
    console.log(arr[ans]);
