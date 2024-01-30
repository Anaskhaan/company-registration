document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      const login = {
        email: email,
        password: password,
      };

      const apiURL = "https://2c21-182-176-157-31.ngrok-free.app/auth/login";
      fetch(apiURL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(login),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            window.location.href = "employeeReg.html";
          } else {
            alert("Invalid credentials");
          }
        });

      // if (!email === "" && !password === "") {
      // } else {
      //   alert("Please fill the email or password.");
      // }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const signupLink = document.querySelector(".signup a");

  if (signupLink) {
    signupLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "signup.html";
    });
  }
});
