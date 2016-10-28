var socket= io();

socket.on('connected', function(){
    console.log('Connected with socket.io');
});