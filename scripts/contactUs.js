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
  let message = document.getElementById("message").value;
  let errorMessage = document.getElementById("errorMessage");
  
  errorMessage.style.padding = "10px"; 


  //Regex variables
  let userNameRegex = /^[a-zA-Z\s]*$/;
  let subjectRegex = /^[a-zA-Z\s]*$/; 
  let phoneRegex = /[^\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;
  let emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
  let messageRegex = /^.{10,}$/;

  let userNameInput = userName.match(userNameRegex);
  let subjectInput = subject.match(subjectRegex);
  let phoneInput = phone.match(phoneRegex);
  let emailInput = email.match(emailRegex);
  let messageInput = message.match(messageRegex);


  //Error message array
  let errorMessageOptions = ["Please enter your first and last name",
    "Your subject can only contain letters a-z", 
    "You must enter a telephone number in the format of (555) 555-5555", 
    "You must enter a valid email address",
    "Please enter more than 10 characters in your message"];

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

