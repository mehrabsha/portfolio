particlesJS.load('section1', 'assets/config.json', function() {
    console.log('callback - particles.js config loaded');
});

function smoothScroll(){
    window.scrollBy({ 
        top: document.getElementById("section2").offsetTop, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      });
}

function openMenu(){
        var ul = document.querySelector("nav ul");
        var ulli = document.querySelectorAll("nav ul li");
        console.log(ul.style.height);
    if (ul.style.height=="0px"){
        ul.style.visibility = "visible";
        ul.style.height = "100vh";
        document.querySelectorAll('nav ul li').forEach(element => {
            element.style.display = "block";
        });

    }else{
        ul.style.height = "0";
        ul.style.visibility = "hidden";
        document.querySelectorAll('nav ul li').forEach(element => {
            element.style.display = "none";
        });
    }

}


document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready

    document.querySelectorAll('.works .work').forEach(element => {
        console.log(element.offsetWidth+"px");
        element.style.height = element.offsetWidth+"px";
    });


    new Typewriter('#write', {
        strings: ['WEB DEVELOPER', 'UI DESIGNER' , 'ANDROID DEVELOPER'],
        autoStart: true,
        loop : true
      });
});

/*

var i =000 ;
var sec1 = document.querySelector('#section1');
var sec2 = document.querySelector('#section2');
var sec3 = document.querySelector('#section3');
var sec4 = document.querySelector('#section4');
var sec5 = document.querySelector('#section5');
var sec6 = document.querySelector('#section6');

var setions = [sec1,sec2,sec3,sec4,sec5];
const sec2top = sec2.offsetTop;
const sec3top = sec3.offsetTop;


window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        console.log(window.scrollY + " || " + sec3top)

        
    if (sec2.offsetTop < window.scrollY + 50 && sec2.offsetTop > window.scrollY - 50 && sec2.style.position != 'fixed'){
        sec2.style.position = 'fixed';
        sec2.style.marginTop = '0';
        sec3.style.marginTop = '200vh';
    }else if ( window.scrollY < sec2top && sec2.style.position == 'fixed'){
        sec2.style.position = 'relative';
        sec2.style.marginTop = '100vh';
        sec3.style.marginTop = '0';
    }

    if (sec3top < window.scrollY + 50 && sec3top > window.scrollY - 50 && sec3.style.position != 'fixed'){
        sec3.style.position = 'fixed';
        sec3.style.marginTop = '0';
        sec4.style.marginTop = '100vh';
    }else if ( window.scrollY < sec3top && sec3.style.position == 'fixed'){
        sec3.style.position = 'relative';
        sec3.style.marginTop = '0';
        sec4.style.marginTop = '0';
    }

});*/