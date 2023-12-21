// $('#login').click(function(){ window.location = 'http://127.0.0.1:5500/men.html'});

$('#loginpage').click(function(){
    window.location.href='login.html';
 })

 $('#homepage').click(function(){
   window.location.href='index.html';
})

 $('#menpage').click(function(){
   window.location.href='men.html';
 })

 $('#womenpage').click(function(){
   window.location.href='women.html';
 })

 $('#kidspage').click(function(){
   window.location.href='kids.html';
 })

 $('#gotosignup').click(function(){
  window.location.href='signup.html';
})

$('#gotologin').click(function(){
  window.location.href='login.html';
})


 $('#showpassword').click(function(){
   if('password' == $('#password2').attr('type')){
        $('#password2').attr('type', 'text');
   }else{
        $('#password2').attr('type', 'password');
   }
});


function signup() {
  var firstname = $('#signup-firstname').val();
  var lastname = $('#signup-lastname').val();
  var email = $('#signup-email').val();
  var password = $('#signup-password').val();

  $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:5500/post.html',  //C# signup endpoint
      data: { firstname: firstname, lastname: lastname, email: email, password: password },
      success: function(response) {
          alert(response);
      }
  });
}

function login() {
  var email = $('#login-email').val();
  var password = $('#login-password').val();

  $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:5500/post.html',  //C# login endpoint
      data: { email: email, password: password },
      success: function(response) {
          alert(response); 
      }
  });
}
