function showAlert(message) {
  window.alert(message);
}
function navigate(url) {
  window.location.href = url;
}
async function verify_account() {
    console.log('helo');
    return();
  const path = window.location.pathname;
  const pathParts = path.split("/");
  const uid = pathParts[2];
  const token = pathParts[3];
  console.log(uid);
  console.log(token);
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/auth/users/activation/",
      {
        uid: uid,
        token: token,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    console.log(response.status);
    if (response.status === 204) {
      navigate("http://localhost:3000/");
    } else {
      showAlert("Account verification failed.");
    }
  } catch (error) {
    showAlert("Account verification failed.");
  }
}
