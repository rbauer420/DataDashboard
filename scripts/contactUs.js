//Hamburger Menu//

/**Contact Form */
function validate(){

    // Note
    var userName = document.getElementById("userName").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("messgae").value;
    var errorMessage = document.getElementById("errorMessage");

    errorMessage.style.padding = "25px";  


    // Name can only contain letters a-z in lowercase
    // Note
    function isValiduserName(inputText){
      var nameformat = /^[a-z]+$/;
      if(inputText.value.match(nameformat))
      {
        return true;
      }
      else {
        // Note
        text = "Your name can only contain letters a-z";
        errorMessage.innerHTML = text;
        return false;
      }
    } 

    //Subject can only contain letters a-z in lowercase
    function isValidSubject(inputText){
        var subjectformat = /^[a-z]+$/;
        if(inputText.value.match(subjectformat))
        {
          return true;
        }
        else {
          text = "The subject can only contain letters a-z";
          errorMessage.innerHTML = text;
          return false;
        }
      }

    // The telephone number must be in the format of (555) 555-5555
    function isValidPhone(inputText){
        var phoneformat = /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/;
        if(inputText.value.match(phoneformat))
        {
          return true;
        }
        else {
          text = "You must enter a telephone number in the format of (555) 555-5555";
          errorMessage.innerHTML = text;
          return false;
        }
      }

    //function formatPhone(text){
     //   const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
      //  return text.replace(regex, '($1) $2-$3');
   // }

    // Must be a valid email address
    function isValidEmail(inputText){
        var emailformat = /^[^@]+@[^@.]+\.[a-z]+$/i;
        if(inputText.value.match(emailformat))
        {
          return true;
        }
        else {
          text = "You must enter a valid email address";
          errorMessage.innerHTML = text;
          return false;
        }
      }

    // Must contain more than 10 characters
    function isValidMessage(inputText){
        var messagelength = /^.{10,}$/;
        if(inputText.value.match(messagelength))
        {
          return true;
        }
        else {
          text = "Please Enter More Than 10 Characters in Your Message";
          errorMessage.innerHTML = text;
          return false;
        }
      }
}