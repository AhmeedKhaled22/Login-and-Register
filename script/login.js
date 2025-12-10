document.getElementById("login").addEventListener("click", function (e) {
  e.preventDefault();

  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("productData")) || [];
  let foundUser = users.find(
    (u) => u.mail === emailInput && u.pass === passwordInput
  );

  if (foundUser) {
    localStorage.setItem("productData", JSON.stringify(foundUser));
    window.location.href = "wep.html";
  } else {
    alert("الإيميل أو الباسورد غلط!");
  }
});
