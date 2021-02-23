//Hamburger Menu//


/**Contact Form */
document.getElementById("myform").addEventListener("submit", function(event){
  event.preventDefault()
  validate()
});


function validate() {

  //Form input variables 
  let userName = document.getElementById("userName").value;
  let subject = document.getElementById("subject").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("messgae").value;
  let errorMessage = document.getElementById("errorMessage");
  
  errorMessage.style.padding = "10px"; 


  //Regex variables
  let userNameRegex = /^[a-z]+$/;
  let subjectRegex = /^[a-z]+$/;
  let phoneRegex = /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/;
  let emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
  let messageRegex = /^.{10,}$/;

  let userNameInput = userName.match(userNameRegex);
  let subjectInput = subject.match(subjectRegex);
  let phoneInput = phone.match(phoneRegex);
  let emailInput = email.match(emailRegex);
  let messageInput = message.match(messageRegex);


  //Error message array
  let errorMessageOptions = ["Your name can only contain letters a-z",
    "Your subject can only contain letters a-z", 
    "You must enter a telephone number in the format of (555) 555-5555", 
    "You must enter a valid email address",
    "Please Enter More Than 10 Characters in Your Message"];

    if (userName != userNameInput) {
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

      alert("Your contact form was submitted successfully" + " " + userName + "! We will respond as soon as possible!");
      return true;

  }

