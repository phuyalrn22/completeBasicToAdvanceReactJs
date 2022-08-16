const form = document.getElementById("register");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // const formData = new FormData(e.target);
  // console.log(formData.get);
  const fullName = document.getElementById("fullName").value;
  const fullNameError = document.getElementById("fullNameError");

  const userName = document.getElementById("userName").value;
  const userNameError = document.getElementById("userNameError");

  const password = document.getElementById("password").value;
  const errorHtmlObject = document.getElementById("error");

  const confirmPassword = document.getElementById("confirmPassword").value;
  var error = [];
  fullNameError.innerHTML = "";
  userNameError.innerHTML = "";

  if (!fullName || fullName.length < 3) {
    error.push("Full Name should be valid");
    fullNameError.innerHTML = "Full Name should be valid";
  }
  if (!userName || userName.length < 3) {
    error.push("User Name should be valid");
    userNameError.innerHTML = "User Name should be valid";
  }
  if (!password || password.length < 3) {
    error.push("password should be valid");
  }
  if (password !== confirmPassword) {
    error.push("Confirm password should be same as password");
  }
  if (error.length === 0) {
    console.log(fullName, userName, password, confirmPassword);
  } else {
    let errorString = "";
    for (let i = 0; i < error.length; i++) {
      errorString += `<li>  ${error[i]} </li>`;
    }
    errorHtmlObject.innerHTML = errorString;
  }
});
