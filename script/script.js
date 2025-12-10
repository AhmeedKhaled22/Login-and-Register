let firstName = document.getElementById("first-Name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("create");
let continer = [];

//  validate
let firstNameAlert = document.getElementById("firstNameAlert");
let lastNameAlert = document.getElementById("lastNameAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwrdAlert");
if (localStorage.getItem("productData") != null) {
  continer = JSON.parse(localStorage.getItem("productData"));
} else {
  continer = [];
}

if (!Array.isArray(continer)) {
  continer = [continer];
}
// Add Data

function checkAllValid() {
  if (
    validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validatePassword()
  ) {
    btn.disabled = false;
    btn.style.backgroundColor = "rgb(181, 255, 181)";
  } else {
    btn.disabled = true;
    btn.style.backgroundColor = "#2F2F2F";
  }
}

firstName.addEventListener("input", checkAllValid);
lastName.addEventListener("input", checkAllValid);
email.addEventListener("input", checkAllValid);
password.addEventListener("input", checkAllValid);
checkAllValid();
function addData() {
  if (
    validateFirstName() == true &&
    validateLastName() == true &&
    validateEmail() == true &&
    validatePassword()
  ) {
    let data = {
      fName: firstName.value,
      lName: lastName.value,
      mail: email.value,
      pass: password.value,
    };
    continer.push(data);
    console.log(data);
    localStorage.setItem("productData", JSON.stringify(continer));
    window.location.href = "index.html";
    clearData();
  }
}
function clearData() {
  fName = firstName.value = "";
  lastName = lastName.value = "";
  email.value = "";
  pass.value = "";
}

// checkvalid

// first name vlidate
function validateFirstName() {
  let regex = /^[A-Z][a-z]{2,15}$/;
  if (regex.test(firstName.value)) {
    firstNameAlert.style.display = "none";
    return true;
  } else {
    firstNameAlert.style.display = "block";
  }
  return false;
}
firstName.addEventListener("blur", validateFirstName);

// last name validate
function validateLastName() {
  let regex = /^[A-Z][a-z]{2,15}$/;
  if (regex.test(lastName.value)) {
    lastNameAlert.style.display = "none";
    return true;
  } else {
    lastNameAlert.style.display = "block";
  }
  return false;
}
lastName.addEventListener("blur", validateLastName);

// email
function validateEmail() {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email.value)) {
    emailAlert.style.display = "none";
    return true;
  } else {
    emailAlert.style.display = "block";
  }
  return false;
}
email.addEventListener("blur", validateEmail);

// password

function validatePassword() {
  let regex = /^[A-Za-z0-9]{8,14}$/;
  if (regex.test(password.value)) {
    passwordAlert.style.display = "none";
    return true;
  } else {
    passwordAlert.style.display = "block";
  }
  return false;
}
password.addEventListener("blur", validatePassword);
