document.addEventListener("DOMContentLoaded", function() {
var button = document.getElementById('button')
var button1 = document.getElementById('button1')
//Here in the callback, we have a variable called responseData
//that holds the content of the server's response,
//in this case, a simple string

button.addEventListener('click', function(){
  console.log('Clicked Button');

  $.ajax({
    url:"http://first-ajax-api.herokuapp.com/",
    method:"",
    data:"",
    dataType:""
  }).done(function (responseData) {
    });
})

  var button1 = $.ajax({
  url:"http://first-ajax-api.herokuapp.com/pong",
  method:"get",
  data:"",
  dataType:"text"
  });

button1.done(function (responseData) {
  console.log ('INSIDE .done ()');

  var inside_section = document.createElement('div');
  inside_section.innerHTML = responseData;
  document.querySelector('body').append(inside_section);
}).fail(function(){
  console.log('TRYHARDER).fail function');
  console.log(responseData);
}).always(function(){
  console.log('always method');
});


console.log('Clicked Button');
console.log('responseData')






  });
  /* Your code goes here */
