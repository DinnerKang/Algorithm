//https://www.acmicpc.net/problem/5567
var readline = require('readline'),
    r1 = readline.createInterface(process.stdin, process.stdout);

r1.question('1번째 : ', function (ans) {
    var n = ans;
    r1.question('2번째 : ', function (ans) {
        var list = ans;
        var my_friend_list = [];
        var next_friend = [];
        r1.on('line', function (line) {
            if (line == 'exit') {
                console.log(my_friend_list);
                console.log(next_friend);

                // 합치고 중복값 제거
                var result = my_friend_list.concat(next_friend).reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
                // 1은 내 자신이니깐
                console.log('1 은 빼고 결과 :',result.length -1);
                r1.close();
            }
            var a = line.split(' ')[0];
            var b = line.split(' ')[1];

            // a가 나면 b가 친구니깐
            if (a == 1) {
                my_friend_list.push(b);
            }
            if (my_friend_list.indexOf(a) != -1) {
                next_friend.push(b);
            }else if(my_friend_list.indexOf(b) != -1 ){
                next_friend.push(a);
            }

        });
    })
});
r1.on('close', function () {
    process.exit();
});