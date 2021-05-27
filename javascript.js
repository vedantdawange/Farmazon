function GoogleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function () {
      window.location = "AfterLogin.html";
    })
    .catch(function (error) {
      var errormessage = error.message;
      alert(errormessage);
    });
}

let btnback = document.getElementById("bckbttn");

btnback.addEventListener("click", () => {
  window.history.back();
});
