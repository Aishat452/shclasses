function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("email-error");
  if (name == "") {
    nameError.style.display = "block";
    return false;
  } else {
    nameError.style.display = "none";
  }

  if (email == "") {
    emailError.innerHTML = "Please enter your email address.";
    emailError.style.display = "block";
    return false;
  } else if (!validateEmail(email)) {
    emailError.innerHTML = "Please enter a valid email address.";
    emailError.style.display = "block";
    return false;
  } else {
    emailError.style.display = "none";
  }

  document.getElementById("success-message").style.display = "block";
  return true;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
