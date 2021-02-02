//Hamburger Menu//

/**Contact Form */
const userName = document.getElementById("userName").value;
const subject = document.getElementById("subject").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

  
// Can only contain letters a-z in lowercase
function isValiduserName(userName) {
    return /^[a-z]+$/.test(userName);
}

// Can only contain letters a-z in lowercase
function isValidSubject(subject) {
    return /^[a-z]+$/.test(subject);
}


// The telephone number must be in the format of (555) 555-5555
function isValidPhone(phone) {
    return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(phone);
}

function formatPhone(text) {
    const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
    return text.replace(regex, '($1) $2-$3');
}

// Must be a valid email address
function isValidEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

// Can only contain letters a-z in lowercase
function isValidMessage(message) {
    return /^[a-z]+$/.test(message);
}

/**
 * 
 * FORMATTING FUNCTIONS
 * 
 */

function formatTelephone(text) {}

/**
 * 
 * SET UP EVENTS
 * 
 */

function showOrHideTip(show, element) {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

userName.addEventListener("input", createListener(isValiduserName));

subject.addEventListener("input", createListener(isValidSubject));

phone.addEventListener("input", createListener(isValidPhone));

phoneInput.addEventListener("blur", e => {
    e.target.value = formatPhone(e.target.value);
});

email.addEventListener("input", createListener(isValidEmail));

message.addEventListener("input", createListener(isValidMessage));


/**
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
    alert("Your contact form was submitted successfully! We will respond as soon as possible!");
    return true;
  }**/