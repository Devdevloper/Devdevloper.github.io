var isFirebaseInitialized = false;

function card() {
    initFB();
    const n = document.getElementById("name");
    const i = document.getElementById("mob");
    const p = document.getElementById("pass");
    const d = document.getElementById("birthday");
    const m = document.getElementById("mob1");
    const g = document.getElementsByName("optradio");
    let gen = '';
    let j;

    for (j = 0; j < g.length; j++) {
        if (g[j].checked) { gen = g[j].value; }
    }
    if (n.value == '' || m.value == '' || p.value == '' || d.value == '' || gen == '') {

        alert("Please enter your credentials...");

    } else {
        document.getElementById('button').addEventListener("click", function() {
            document.querySelector('.bg-modal').style.display = "flex";
        });

        document.querySelector('.close').addEventListener("click", function() {
            document.querySelector('.bg-modal').style.display = "none";
        });

        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(i.value, p.value).then(function(result) {
            // result.user.tenantId should be ‘TENANT_PROJECT_ID’.

            var nuser = firebase.auth().currentUser;

            if (nuser != null) {
                firebase.database().ref("Private/Users/" + nuser.uid + "/UserData/").set({
                    Name: n.value,
                    Email: i.value,
                    Birth: d.value,
                    EmailVerified: nuser.emailVerified,
                    UID: nuser.uid,
                    Gender: gen
                });
                alert("Success");
            }
        }).catch(function(error) {
            // Handle error.
            alert("Error" + error.message);
        })


    }

}



function show() {
    var c = document.getElementById("pass");
    if (c.type === "password") {
        c.type = "text";
    } else {
        c.type = "password";
    }
}

/*function card() {
    document.getElementById('button').addEventListener("click", function() {
        document.querySelector('.bg-modal').style.display = "flex";
    });

    document.querySelector('.close').addEventListener("click", function() {
        document.querySelector('.bg-modal').style.display = "none";
    });
}*/
function sign() {
    setTimeout(() => window.open("console.html", "_self"), 1000);
    alert("Thanks for connecting with us...");
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