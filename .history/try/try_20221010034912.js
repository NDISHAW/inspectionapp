const res = await getUserid();
localStorage.setItem("user_id", res.user_id);

let btn = document.getElementById("submit-btn");
btn.addEventListener("click", function() {
  async function getUserid() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = {
      username,
      password,
    };
    try {
      const { data: res } = await axios.post(
        "http://localhost:3000/api/login",
        user
      );
      window.location = "dashboard.html";
      console.log(res.id);
      return res;
    } catch (err) {
      console.log(err);
    }
    window.location = "dashboard.html";
  }

})