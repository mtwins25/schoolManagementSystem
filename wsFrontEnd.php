<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>index</h1>
    
    <input type="text" id="input" placeholder="Type a message...">  

    <button id="sendButton">Send Message</button> 
    
    <h1 id="message"></h1>
    
<script>
   var textField= document.getElementById('message');

   var inputField=document.getElementById('input');

   var button=document.getElementById('sendButton');

   button.addEventListener('click',function(){
    var message=inputField.value;
    conn.send(message);});

    var conn = new WebSocket('ws://localhost:8080');
conn.onopen = function(e) {
    console.log("Connection established!");
};

conn.onmessage = function(e) {
    // console.log(e.data);
  textField.innerHTML=e.data;
    
};

    
</script>
</body>
</html>