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
function goTo(event){
    console.log(document.getElementById(event.getAttribute('target')).offsetTop);
    window.scrollTo({ 
        top: document.getElementById(event.getAttribute('target')).offsetTop, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      });
     
      if (window.screen.width < 768){
        openMenu();
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