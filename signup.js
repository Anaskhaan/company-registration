document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.querySelector("form");
  // stop();

  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    // console.log(data);
    const apiURL =
      "https://2c21-182-176-157-31.ngrok-free.app/company/register";
    fetch(apiURL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        let message = data.message;
        console.log(message);
        if (message.endsWith("registered!")) {
          console.log("next page");
          window.location.href = "index.html";
        } else alert("Email or company name are'nt unique!");
        console.log(data);
      })
      .catch((error) => console.log(error));
  });
});

// function stop() {
//   fetch("")
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }
// const a = document.querySelector("a");
// a.addEventListener("click", stop, false);
