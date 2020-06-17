function card() {
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
        const promise = auth.createUserWithEmailAndPassword(i.value, p.value);

        firebase.database().ref("Private/Users/" + m.value + "/").set({
            name: n.value,
            email: i.value,
            password: p.value,
            birth: d.value,
            gender: gen
        });
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