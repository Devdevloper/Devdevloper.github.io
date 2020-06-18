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



function forget() {
    alert("Me kay karu m tula nahi sambhalta yet ka!!!");
}

function sign() {
    window.open("sign.html", "_self");
}

function show() {
    var c = document.getElementById("pas");
    if (c.type === "password") {
        c.type = "text";
    } else {
        c.type = "password";
    }
}