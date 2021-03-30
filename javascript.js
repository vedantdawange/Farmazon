// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDihtrxLmXqqzsVTpMfyv99go-RVijabOU",
    authDomain: "farmazon-fde8e.firebaseapp.com",
    projectId: "farmazon-fde8e",
    storageBucket: "farmazon-fde8e.appspot.com",
    messagingSenderId: "1055915554009",
    appId: "1:1055915554009:web:e79951b1c71b670f53fac8",
    measurementId: "G-61S94CLYJG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const auth = firebase.auth();


function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
}



function signIn() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));




}


function signOut() {

    auth.signOut();
    alert("Signed Out");

}