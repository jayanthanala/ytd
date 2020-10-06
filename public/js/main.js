var input = document.getElementById('url');
var from = document.getElementById('form');

const socket = io();



form.addEventListener("submit",(e) => {
  e.preventDefault();
  socket.emit('dataDisplay',{title});
});

socket.on("show",(data) => {
  console.log(data);
  
});





function submitForm(){
  var form = document.getElementById('form');
  form.submit();
  form.reset();
  return false;
};
