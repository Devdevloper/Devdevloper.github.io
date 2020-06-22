function register() {
    const x = document.getElementById("Log-in");
    const y = document.getElementById("register");
    const z = document.getElementById("btn");
    if (screen.width > 900) {
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";
    } else {
        x.style.left = "-400px";
        y.style.left = "25px";
        z.style.left = "110px";
    }
}

function login() {
    const x = document.getElementById("Log-in");
    const y = document.getElementById("register");
    const z = document.getElementById("btn");
    if (screen.width > 900) {
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0px";
    } else {
        x.style.left = "25px";
        y.style.left = "425px";
        z.style.left = "0px";
    }
}
var isFirebaseInitialized = false;

function log() {

    initFB();

    const auth = firebase.auth();
    var u = document.getElementById("user");
    var p = document.getElementById("pas");

    if (u.value == '' || p.value == '') {
        alert("Please enter your credential");
    } else {
        //const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(u.value, p.value).then(function(result) {

            var nuser = firebase.auth().currentUser;

            if (nuser != null) {

                var namehere = "";

                var ref = firebase.database().ref("Private/Users/" + nuser.uid + "/UserData");
                ref.once("value")
                    .then(function(snapshot) {
                        namehere = snapshot.child("Name").val();
                        alert("Login Success\nHi " + namehere);
                    });
                //window.open("sign.html", "_self");
            }

        }).catch(function(error) {
            // Handle error.
            alert(error.message);
        })
        promise.catch(e => alert(e.message));

        // Handle Errors here.
        //window.alert("Warning : Enter proper details");
    }


}

/* document.write(u);
 document.write("<br>");
 document.write(p);*/



function forget() {
    alert("Me kay karu m tula nahi sambhalta yet ka!!!");
}

function show() {
    var c = document.getElementById("pas");
    if (c.type === "password") {
        c.type = "text";
    } else {
        c.type = "password";
    }
}

function showp() {
    var c = document.getElementById("pass");
    if (c.type === "password") {
        c.type = "text";
    } else {
        c.type = "password";
    }
}

function card() {
    initFB();
    const n = document.getElementById("name");
    const p = document.getElementById("pass");
    const m = document.getElementById("use");

    if (n.value == '' || m.value == '' || p.value == '') {

        alert("Please enter your credentials...");

    } else {
        /* document.getElementById('button').addEventListener("click", function() {
             document.querySelector('.bg-modal').style.display = "flex";
         });

         document.querySelector('.close').addEventListener("click", function() {
             document.querySelector('.bg-modal').style.display = "none";
         });*/

        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(m.value, p.value).then(function(result) {
            // result.user.tenantId should be ‘TENANT_PROJECT_ID’.

            var nuser = firebase.auth().currentUser;

            if (nuser != null) {
                firebase.database().ref("Private/Users/" + nuser.uid + "/UserData/").set({
                    Name: n.value,
                    Email: m.value,
                    Password: p.value,
                    EmailVerified: nuser.emailVerified,
                    UID: nuser.uid,

                });
                alert("Success");
            }
        }).catch(function(error) {
            // Handle error.
            alert("Error:  " + error.message);
        })


    }

}

function initFB() {

    if (!isFirebaseInitialized) {

        var firebaseConfig = {
            apiKey: "AIzaSyCf9ykEI2UyZZSy6Dbs3tulwbSlDkyryfs",
            authDomain: "fir-6fe10.firebaseapp.com",
            databaseURL: "https://fir-6fe10.firebaseio.com",
            projectId: "fir-6fe10",
            storageBucket: "fir-6fe10.appspot.com",
            messagingSenderId: "80895933927",
            appId: "1:80895933927:web:fe63e600e9f0c8fcaad142",
            measurementId: "G-ZTZ2498BHZ"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        isFirebaseInitialized = true;
    }

}