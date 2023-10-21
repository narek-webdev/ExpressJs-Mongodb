const createPost = () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  fetch("http://localhost:1000/dashboard/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  })
    .then((res) => res.json())
    .then((res) => {
      //   if (res.success) {
      //     window.open("http://localhost:1000/dashboard", "_self");
      //   }
      console.log(res);
    })
    .catch((err) => console.log(err, " - err"));
};
