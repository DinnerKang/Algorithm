// /https://www.acmicpc.net/problem/10828
var readline = require('readline');

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


r1.on('line', function(line){
    stackData(line);
});

r1.on('close', function(){
    process.exit();
});


var input_number;
var arr = [];


function stackData(n){
    if(input_number == null){
        input_number = n;
    }else{
        var command = n.split(' ')[0];
        var data = n.split(' ')[1];
        
        switch (command){
            case 'push':
                arr.push(data);
                break;
            case 'pop':
                if(arr.length == 0 ){
                    console.log(-1);
                }else{
                    console.log(arr.pop());
                }
                break;
            case 'size':
                console.log(arr.length);
                break;
            case 'empty':
                if(arr.length ==0){
                    console.log(1);
                }else{
                    console.log(0);
                }
                break;
            case 'top':
                if(arr.length == 0){
                    console.log(-1);
                }else{
                    console.log(arr[arr.length -1]);
                }
                break;
        }
        input_number--;
        if(input_number == 0){
            r1.close();
        }
    }
}

