const u_name = document.getElementById('name');
const email = document.getElementById('email');

const password = document.getElementById('pass');
const mobno = document.getElementById('mobno');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const category = document.getElementById('category')

const database = firebase.database();

signup.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/user/' + email.value).set({
        user_name: u_name.value,
        pass_word: password.value,
        mob_no: mobno.value,
        age: age.value,
        gender: gender.value,
        category: category.value,

    })
})