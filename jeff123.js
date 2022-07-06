function ping(){
    
    i = i + 1;
    console.log('ping', i);
    return pong();
}

function pong(){

    i = i + 1;
    console.log('pong', i);
}

var i = 0;
setInterval(ping, 100)
