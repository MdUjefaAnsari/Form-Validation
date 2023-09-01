function registrationform() {
  const formData = {};
  const registrationForm = document.getElementById("registrationForm");
  const fullName = document.getElementById("fullName").value;
  if (fullName == "") {
    document.getElementById("errfullName").innerHTML =
      "*Please Enter Your Full Name";
    return false;
  }
  if (fullName.length > 30 || 4 > fullName.length) {
    document.getElementById("errfullName").innerHTML =
      "*Length must be in between 4 to 30 !";
    return false;
  }

  const pattern = /^[a-zA-Z]/;
  if (!fullName.match(pattern)) {
    document.getElementById("errfullName").innerHTML =
      "*Enter only Characters!";
    return false;
  }

  document.getElementById("errfullName").innerHTML = "";

  const email = document.getElementById("email").value;
  if (email == "") {
    document.getElementById("errEmail").innerHTML = "*Enter Your Email id";
    return false;
  }

  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("errEmail").innerHTML = "*Enter valid email id";
    return false;
  }

  document.getElementById("errEmail").innerHTML = "";

  const password = document.getElementById("password").value;
  if (password == "") {
    document.getElementById("errPassword").innerHTML =
      "*Please enter your password!";
    return false;
  }

  if (password.length < 8 || password.length > 15) {
    document.getElementById("errPassword").innerHTML =
      "*Password must be between 8 to 15 characters!";
    return false;
  }

  if (password.search(/[A-Z]/) < 0) {
    document.getElementById("errPassword").innerHTML =
      "*Password should be at least one UpperCase letter!";
    return false;
  }
  if (password.search(/[a-z]/) < 0) {
    document.getElementById("errPassword").innerHTML =
      "*Password should be at least one LowerCase letter!";
    return false;
  }
  if (password.search(/[0-9]/) < 0) {
    document.getElementById("errPassword").innerHTML =
      "*Password should be at least one numerical!";
  }
  if (password.search(/[!@#\$%\^&\*_]/) < 0) {
    document.getElementById("errPassword").innerHTML =
      "*Password should be at least one special character!";
    return false;
  }
  document.getElementById("errPassword").innerHTML = "";

  const confirmpassword = document.getElementById("confirmPassword").value;
  if (password != confirmpassword) {
    document.getElementById("errConfirmPassword").innerHTML =
      "*Password did not match!";
    return false;
  }

  document.getElementById("errConfirmPassword").innerHTML = "";

  const age = document.getElementById("age").value;
  if (age == "") {
    document.getElementById("errAge").innerHTML = "*Please enter your age";
    return false;
  }
  if (age <= 17 || age >= 100) {
    document.getElementById("errAge").innerHTML =
      "*Age must be greater than equal to 18";
    return false;
  }

  document.getElementById("errAge").innerHTML = "";

  const genders = document.getElementsByName("gender");

  if (!(genders[0].checked || genders[1].checked || genders[2].checked)) {
    document.getElementById("errGender").innerHTML = "*Please select your gender";
    return false;
  }
  document.getElementById("errGender").innerHTML = "";

  const checkbox = document.getElementsByName("interests");
  if (
    !(
      checkbox[0].checked ||
      checkbox[1].checked ||
      checkbox[2].checked ||
      checkbox[3].checked
    )
  ) {
    document.getElementById("errInterest").innerHTML =
      "*Please choose at least one interest!";
    return false;
  }
  document.getElementById("errInterest").innerHTML = "";

  alert("Your Data Successfully Submitted!!");

  formData["fullName"] = fullName;
  formData["email"] = email;
  formData["password"] = password;
  formData["confirmPassword"] = confirmpassword;
  formData["age"] = age;
  formData["gender"] = document.querySelector(
    "input[name='gender']:checked"
  ).value;
  formData["interests"] = [
    ...document.querySelectorAll("input[name='interests']:checked"),
  ].map((input) => input.value);
  formData["country"] = document.getElementById("country").value;
  console.log(formData);
  registrationForm.reset();

  return false;
}
