const user = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
};

const sendPostRequest = async () => {     
  try {
    const resp = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
        user
    );

    console.log(resp.data);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

sendPostRequest();
