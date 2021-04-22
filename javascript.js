function GoogleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(function() {
        window.location = "AfterLogin.html"
    }).catch(function(error) {
        var errormessage = error.message;
        alert(errormessage);

    })
}