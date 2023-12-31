document.getElementById("button_submit").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:1000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        window.open("http://localhost:1000/dashboard", "_self");
      }
    })
    .catch((err) => console.log(err, " - err"));
});
