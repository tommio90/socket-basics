    var socket= io();
    var name = getQueryVariable('name') || 'Anonymous';
    var room = getQueryVariable('room');
socket.on('connected', function(){
    console.log('Connected with socket.io');
});


 jQuery('#location').append('<p> <strong>' +name+' : </strong>  Joined the room:  ' +room+ '</p>');

socket.on('message', function(message){
    
    var momentTimestamp = moment.utc(message.timestamp);
    var date = momentTimestamp.local().format(' h:mm:ss a');
    var $messages =jQuery('.messages');
    
    console.log('New message:');
    console.log(message.text);

    $messages.append('<p> <strong>' +message.name+' :    '+date+ '</strong> </p>');
    $messages.append('<p>'+message.text+'</p>');

});

//Handles submitting of new message

var $form = jQuery('#message-form');

$form.on('submit', function(event){
    event.preventDefault();

    var $message = $form.find('input[name=message]');
    socket.emit('message', {
        name: name,
        text: $message.val()
    });

    $message.val('');
  
    
});
