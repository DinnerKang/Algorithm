// https://www.acmicpc.net/problem/2839
var readline = require('readline'),
    r1 = readline.createInterface(process.stdin, process.stdout);

r1.question('입력 : ', function (ans) {
    var result = 0;
    var five =0;
    var three = 0;
    while(true){
        if(ans%5==0){
            five = ans/5;
            break;
        }
        ans = ans -3;
        three = three +1;

        if(ans<0) break;
        
    }
    if(ans>=0){
        result = five + three;
        console.log(result);
    }else{
        console.log(-1);
    }

});

r1.on('close', function () {
    process.exit();
});

// 백준 디버그용
var fs = require('fs');
var stdin = fs.readFileSync('/dev/stdin', 'utf8');
var input = stdin.match(/[^\r\n]+/g);


var ans = parseInt(input[0], 10),
    result=0,
    five=0,
    three = 0;

    while(true){
    if(ans%5==0){
        five = ans/5;
        break;
    }
    ans = ans -3;
    three = three +1;
    if(ans<0) break;
    }
    if(ans>=0){
        result = five + three;
        console.log(result);
    }else{
        console.log(-1);
    }