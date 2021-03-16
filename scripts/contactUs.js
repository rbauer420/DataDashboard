//Post Contact Form to API
function subForm(){
  return fetch("https://api.apispreadsheets.com/data/9192/", {
    method: "POST",
    body: JSON.stringify({"data": {"email":"value","phone":"value","message":"value","subject":"value","userName":"value"}}),
  }).then(res =>{
    if (res.status === 201){
      alert("Your Contact Form Data Was Saved!")
    }
    else{
      alert("Huston, We Have A Problem! Your Contact Form Data Was NOT Saved!")
    }
  });
}

document.getElementById('myform').addEventListener('submit', (e) => {
  e.preventDefault();
  validate();
});

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
    
    const response = subForm().then((response) => {
      alert("Your contact form was submitted successfully" + " " + userName + "! We will respond as soon as possible!");
    });
}

//Reformat Phone 
function formatPhone() {
  let number = document.getElementById("phone");
  number.addEventListener("keyup", function(event) {
      let n = this.value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      number.value = n;
  });
}
