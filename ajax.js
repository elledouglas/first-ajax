document.addEventListener("DOMContentLoaded", function() {
var button = document.getElementById('button')
var button1 = document.getElementById('button1')
var button7 = document.getElementById('button7')
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

button1.addEventListener('click', function(){
  console.log('Clicked Button 1');

  $.ajax({
    url:"http://first-ajax-api.herokuapp.com/ping",
    method:"get",
    data:"",
    dataType:"text"

}).done(function (responseData) {
  console.log ('INSIDE .done ()');


var inside_section = document.createElement('p');
  inside_section.innerHTML = responseData;
  document.querySelector('#step7').append(inside_section);
}).fail(function(){
  console.log('TRYHARDER).fail function');
  console.log(responseData);
}).always(function(){
  console.log('always method');
});
});

button7.addEventListener('click', function(){
console.log('button 7 created');

$.ajax( {
  url:"http://first-ajax-api.herokuapp.com/count",
  method:"GET",
  data:"",
  dataType:'text'
}).done(function (responseData){

});//
});
//
// console.log('Clicked Button');
// console.log('responseData')

button8.addEventListener('click', function(){
  console.log('button 8');

  $.ajax({
    url:"http://first-ajax-api.herokuapp.com/time",
    method:'GET',
    data: {timezone: ""},
    dataType: "text"
  }).done(function (responseData){
  })
});
  /* Your code goes here */
});
