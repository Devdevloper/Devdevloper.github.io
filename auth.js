// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2mV6ydrOSAppb8QDKhQQAPAjbcGkU7NE",
    authDomain: "final-12ac2.firebaseapp.com",
    projectId: "final-12ac2",
    storageBucket: "final-12ac2.appspot.com",
    messagingSenderId: "492678379251",
    appId: "1:492678379251:web:fc7ab26105dcab01e56986",
    measurementId: "G-CESW4M7DN5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = firebase.auth();
const database = firebase.database();

function signUp() {
    const nme = document.getElementById("signname").value;
    const email_id = document.getElementById("signemail").value;
    const pass = document.getElementById("signpass").value;
    const num = document.getElementById("signno").value;

    if (email_id.trim() == "") {
        alert("Enter Email");
    } else if (pass.trim().length < 7) {
        alert("Password must be at least 7 characters");
    } else if (nme == "") {
        alert("Name is not entered");
    } else if (num.trim().length < 10 || num.trim().length > 10) {
        alert("Enter only 10 digit number...!");
    } else {
        auth
            .createUserWithEmailAndPassword(email_id, pass)
            .then(function() {
                var user = auth.currentUser;

                var database_ref = database.ref();
                var user_data = {
                    name: nme,
                    email: email_id,
                    pass: pass,
                    num: num,
                    last_login: Date.now()
                }
                database_ref.child('users/' + user.uid).set(user_data);

                alert("User Created");
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
                // ...
            });
    }
}

function logIn() {
    const email_id = document.getElementById("logemail").value;
    const pass = document.getElementById("logpass").value;

    if (email_id.trim() == "") {
        alert("Enter Email");
    } else if (pass.trim() == "") {
        alert("Enter Password");
    } else {
        authenticate(email_id, pass);
    }
}

const authenticate = (email, password) => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password);
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function() {
            var user = auth.currentUser;

            var database_ref = database.ref();
            var user_data = {

                last_login: Date.now()
            }
            database_ref.child('users/' + user.uid).update(user_data);

            alert("User Logged in...");
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
};

/*function signUp() {
    var nme = document.getElementById("name").value;
    var email_id = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var num = document.getElementById("no").value;

    /*if ( validate_email(email_id) == false || validate_pass(pass) == false) {
        alert("Email or Password is not in proper format !");
        return;
    }
    if (validate_field(nme) == false || validate_field(num) == false) {
        alert("One or more fields are empty...!");
        return;
    } else {
        auth.createUserWithEmailAndPassword(email_id, pass)
            .then(function() {
                var user = auth.currentUser;

                var database_ref = database.ref();
                var user_data = {
                    name: nme,
                    email: email_id,
                    pass: pass,
                    num: num,
                    last_login: Date.now()
                }
                database_ref.child('users/' + user.uid).set(user_data);

                alert("User Created");
            })
            .catch(function(error) {
                var error_code = error.code;
                var error_message = error.message;

                alert(error_message);
            })
    }
}


function logIn() {
    var email_id = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    /*if ( validate_email(email_id) == false || validate_pass(pass) == false) {
        alert("Email or Password is not in proper format !");
        return;
    }

    auth.signInWithEmailAndPassword(email_id, pass)
        .then(function() {
            var user = auth.currentUser;

            var database_ref = database.ref();
            var user_data = {

                last_login: Date.now()
            }
            database_ref.child('users/' + user.uid).update(user_data);

            alert("User Logged in...");
        })
        .catch(function(error) {
            var error_code = error.code;
            var error_message = error.message;

            alert(error_message);
        })

}

/*function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true;
    } else {
        return false;
    }
}

function validate_pass(password) {
    if (password.length > 6) {
        return true;
    } else {
        return false;
    }
}

function validate_field(field) {
    if (field == null) {
        return false;
    } else if (field.length <= 0) {
        return false;
    } else {
        return true;
    }
}*/