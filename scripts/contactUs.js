//Hamburger Menu//

document.getElementById("contactSubmit").addEventListener("click", function(event){
  event.preventDefault()
});

/**Contact Form */
function validate(){

  //Form input variables 
  var userName = document.getElementById("userName").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("messgae").value;
  var errorMessage = document.getElementById("errorMessage");
  
  errorMessage.style.padding = "25px"; 


  //Regex variables
  var userNameRegex = /^[a-z]+$/;
  var subjectRegex = /^[a-z]+$/;
  var phoneRegex = /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/;
  var emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
  var messageRegex = /^.{10,}$/;

  var userNameInput = userName.match(userNameRegex);
  var subjectInput = userName.match(subjectRegex);
  var phoneInput = userName.match(phoneRegex);
  var emailInput = userName.match(emailRegex);
  var messageInput = userName.match(messageRegex);


  //Error message array
  var errorMessageOptions = ["Your name can only contain letters a-z",
    "Your subject can only contain letters a-z", 
    "You must enter a telephone number in the format of (555) 555-5555", 
    "You must enter a valid email address",
    "Please Enter More Than 10 Characters in Your Message"];

    if(userName != userNameInput) {
      errorMessage.innerHTML = errorMessageOptions[0];
      return false;
    } else if (subject != subjectInput) {
      errorMessage.innerHTML = errorMessageOptions[1];
      return false;
    } else if (phone != phoneInput) {
      errorMessage.innerHTML = errorMessageOptions[2];
      return false;
    } else if (email != emailInput) {
      errorMessage.innerHTML = errorMessageOptions[3];
      return false;
    } else if (message != messageInput) {
      errorMessage.innerHTML = errorMessageOptions[4];
      return false;
    } 
      alert("Your contact form was submitted successfully! We will respond as soon as possible!");
      return true;

  }

