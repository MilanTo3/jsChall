function ping(n){
    
    i = i + 1;
    console.log('ping', i);
    return pong(n + 1);
}

function pong(n){

    i = i + 1;
    console.log('pong', i);
}

var i = 0;
setInterval(ping, 100, i)