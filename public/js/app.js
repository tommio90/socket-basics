var socket= io();

socket.on('connected', function(){
    console.log('Connected with socket.io');
});

socket.on('message', function(message){
    console.log('New message:');
    console.log(message.text);

})