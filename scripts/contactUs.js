//Hamburger Menu//

/**Contact Form */

function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
  
    error_message.style.padding = "10px";
  
    var text;
    if(name.length < 5){
      text = "Please Enter a Valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter a Valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 10){
      text = "Please Enter More Than 10 Characters in Your Message";
      error_message.innerHTML = text;
      return false;
    }
    alert("Your contact form was submitted successfully! I will respond as soon as possible!");
    return true;
  }