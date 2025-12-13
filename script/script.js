let firstName = document.getElementById("first-Name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("create");
let continer = [];

// Alerts
let firstNameAlert = document.getElementById("firstNameAlert");
let lastNameAlert = document.getElementById("lastNameAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwrdAlert");

// أخفي كل التنبيهات عند البداية
firstNameAlert.style.display = "none";
lastNameAlert.style.display = "none";
emailAlert.style.display = "none";
passwordAlert.style.display = "none";

// استرجاع البيانات من localStorage
if (localStorage.getItem("productData") != null) {
  continer = JSON.parse(localStorage.getItem("productData"));
} else {
  continer = [];
}

if (!Array.isArray(continer)) {
  continer = [continer];
}

// دالة التحقق من كل الحقول لتفعيل زر الإرسال
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

// استدعاء التحقق أثناء الكتابة
firstName.addEventListener("input", checkAllValid);
lastName.addEventListener("input", checkAllValid);
email.addEventListener("input", checkAllValid);
password.addEventListener("input", checkAllValid);
checkAllValid();

// إضافة البيانات
function addData() {
  if (
    validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validatePassword()
  ) {
    let data = {
      fName: firstName.value,
      lName: lastName.value,
      mail: email.value,
      pass: password.value,
    };
    continer.push(data);
    localStorage.setItem("productData", JSON.stringify(continer));
    clearData();
    window.location.href = "index.html";
  }
}

// إعادة تهيئة الحقول
function clearData() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
  checkAllValid();
}

// الدوال الخاصة بالتحقق

function validateFirstName() {
  if (firstName.value.trim() === "") {
    firstNameAlert.style.display = "none";
    return false;
  }
  let regex = /^[A-Z][a-z]{2,15}$/;
  if (regex.test(firstName.value)) {
    firstNameAlert.style.display = "none";
    return true;
  } else {
    firstNameAlert.style.display = "block";
    return false;
  }
}
firstName.addEventListener("blur", validateFirstName);

function validateLastName() {
  if (lastName.value.trim() === "") {
    lastNameAlert.style.display = "none";
    return false;
  }
  let regex = /^[A-Z][a-z]{2,15}$/;
  if (regex.test(lastName.value)) {
    lastNameAlert.style.display = "none";
    return true;
  } else {
    lastNameAlert.style.display = "block";
    return false;
  }
}
lastName.addEventListener("blur", validateLastName);

function validateEmail() {
  if (email.value.trim() === "") {
    emailAlert.style.display = "none";
    return false;
  }
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email.value)) {
    emailAlert.style.display = "none";
    return true;
  } else {
    emailAlert.style.display = "block";
    return false;
  }
}
email.addEventListener("blur", validateEmail);

function validatePassword() {
  if (password.value.trim() === "") {
    passwordAlert.style.display = "none";
    return false;
  }
  let regex = /^[A-Za-z0-9]{8,14}$/;
  if (regex.test(password.value)) {
    passwordAlert.style.display = "none";
    return true;
  } else {
    passwordAlert.style.display = "block";
    return false;
  }
}
password.addEventListener("blur", validatePassword);

