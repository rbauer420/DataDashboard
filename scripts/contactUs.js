//Hamburger Menu//


/**Contact Form */
function validate(){

  //Form input variables 
  var userName = document.getElementById("userName").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var errorMessage = document.getElementById("errorMessage");
  
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
  let errorMessageOptions = ["Please enter your first and last name using only letters a-z.",
    "Your subject can only contain letters a-z", 
    "You must enter a telephone number in the format of (555) 555-5555", 
    "You must enter a valid email address",
    "Please enter more than 10 characters in your message"];

    var text;
    if (userName != userNameInput) {
      errorMessage.innerHTML = errorMessageOptions[0];
      return false;
    } 
    if (subject != subjectInput) {
      errorMessage.innerHTML = errorMessageOptions[1];
      return false;
    } 
    if (phone != phoneInput) {
      errorMessage.innerHTML = errorMessageOptions[2];
      return false;
    }
    if (email != emailInput) {
      errorMessage.innerHTML = errorMessageOptions[3];
      return false;
    }
    if (message != messageInput) {
      errorMessage.innerHTML = errorMessageOptions[4];
      return false;
    } 

    fetch("https://api.apispreadsheets.com/data/9192/", {
      method: "POST",
      body: JSON.stringify({"data": {"email":emailInput,"phone":phoneInput,"message":messageInput,"subject":subjectInput,userName:userNameInput}}),
    }).then(res =>{
      if (res.status === 201){
        // SUCCESS
      }
      else{
        // ERROR
      }
    })
      alert("Your contact form was submitted successfully" + " " + userName + "! We will respond as soon as possible!");
      return true;

  }