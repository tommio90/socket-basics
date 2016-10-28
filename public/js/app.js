var socket= io();

socket.on('connected', function(){
    console.log('Connected with socket.io');
});

socket.on('message', function(message){
    
    var momentTimestamp = moment.utc(message.timestamp);
    var date = momentTimestamp.local().format(' h:mm:ss a');
    console.log('New message:');
    console.log(message.text);

    jQuery('.messages').append('<p> <strong>' +date+' : </strong>    ' +message.text+ '</p>');

});

//Handles submitting of new message

var $form = jQuery('#message-form');

$form.on('submit', function(event){
    event.preventDefault();

    var $message = $form.find('input[name=message]');
    socket.emit('message', {
        text: $message.val()
    });

    $message.val('');
  
    
});
