document.getElementById("button_submit").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirm_password").value;

  fetch("registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, confirm_password }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        window.open("http://localhost:1000/dashboard", "_self");
      }
    })
    .catch((err) => console.log(err, " - err"));
});
