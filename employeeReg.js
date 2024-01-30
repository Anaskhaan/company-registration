// const formEl = document.querySelector("form");

// const formData = new FormData(formEl);
// const data = Object.fromEntries(formData);

// const apiUrl = "https://2c21-182-176-157-31.ngrok-free.app/auth/signup";

// fetch(apiUrl, {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

document.addEventListener("DOMContentLoaded", function () {
  const formEl = document.querySelector("form");
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  const apiUrl = "https://2c21-182-176-157-31.ngrok-free.app/auth/signup";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
});
