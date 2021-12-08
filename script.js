$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Engineer", "Developer", "Designer", "Tester"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Engineer", "Developer", "Designer", "Tester"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-3", {
        strings: ["The whole and sole about whom you read above...", "Devesh Tushar Vaidya"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();
        scrollPercent = (scroll/(dh-wh))*100;
        $('#progressbar').css('height', scrollPercent + '%');
    });
    
})

function toggleBtn() {
    const Btns = document.querySelector(".btns");
    const add = document.getElementById("add");
    const remove = document.getElementById("remove");
    const btn = document.querySelector(".btns").querySelectorAll("a");
    Btns.classList.toggle("open");
    if (Btns.classList.contains("open")) {
      remove.style.display = "block";
      add.style.display = "none";
      btn.forEach((e, i) => {
        setTimeout(() => {
          bottom = 40 * i;
          e.style.bottom = bottom + "px";
          console.log(e);
        }, 100 * i);
      });
    } else {
      add.style.display = "block";
      remove.style.display = "none";
      btn.forEach((e, i) => {
        e.style.bottom = "0px";
      });
    }
  }

  function sendEmail() {
      let email = document.getElementById("mail");
      let sub = document.getElementById("sub");
      let msg = document.getElementById("sub");
    Email.send({
      Host: "smtp.gmail.com",
      Username: email,
      Password: "Enter your password",
      To: 'deveshtv252000@gmail.com',
      From: email,
      Subject: sub,
      Body: msg,
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }

  function sendmail(){
    
    var name = $('#Name').val();
    var email = $('#Sender').val();
    var subject = $('#Subject').val();
          var message = $('#Message').val();

    // var body = $('#body').val();

    var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
    //console.log(name, phone, email, message);

    Email.send({
      SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
      To: 'engineerdev4519@gmail.com',
      From: email,
      Subject: "New message on contact from "+name,
      Body: Body
    }).then(
      message =>{
        //console.log (message);
        if(message=='OK'){
        alert('Your mail has been send. Thank you for connecting.');
        }
        else{
          console.error (message);
          alert('There is error at sending message. ')	
        }
      }
    );
  }