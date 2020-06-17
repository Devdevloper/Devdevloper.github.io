function log() {
    const auth = firebase.auth();
    var u = document.getElementById("user");
    var p = document.getElementById("pas");

    if (u.value == '' || p.value == '') {
        alert("Please enter your credential");
    } else {
        //const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(u.value, p.value);
        promise.catch(e => alert(e.message));


        // Handle Errors here.
        //window.alert("Warning : Enter proper details");
    }
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            window.alert("Failuare");
        } else {
            alert("Success");
        }

    });

}

/* document.write(u);
 document.write("<br>");
 document.write(p);*/



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