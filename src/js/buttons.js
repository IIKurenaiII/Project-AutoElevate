var navbarbutton = document.getElementById("btn");
navbarbutton.addEventListener("click",function(){
    window.location.href = "tuning.html";
});
var tuningbutton = document.getElementById("tunbtn");
var tuningbutton2 = document.getElementById("tunbtn2");
var tuningbutton3 = document.getElementById("tunbtn3");

tuningbutton.addEventListener("click",function(){
    window.location.href = "tuning.html";
});
tuningbutton2.addEventListener("click",function(){
    window.location.href = "tuning.html";
});
tuningbutton3.addEventListener("click",function(){
    window.location.href = "tuning.html";
});


//messengers
var buttoninstagram = document.getElementById("ig");
var buttonfacebook = document.getElementById("fb");
var buttonyoutube = document.getElementById("yt");
var buttontelegram = document.getElementById("tl");

buttoninstagram.addEventListener("click", function(){
    window.location.href= "https://www.instagram.com/";
});

buttonfacebook.addEventListener("click", function(){
    window.location.href= "https://www.facebook.com/?locale=uk_UA";
});

buttonyoutube.addEventListener("click", function(){
    window.location.href= "https://www.youtube.com/";
});

buttontelegram.addEventListener("click", function(){
    window.location.href= "https://web.telegram.org/a/";
});



//playlist-button
function togglePlay(){
    var audio = document.getElementById("audioPlayer");
    var audiobutton = document.querySelector(".playlist-button");

    if (audio.paused){
        audio.play();
        audiobutton.textContent = "⏸️";
    } else {
        audio.pause();
        audiobutton.textContent = "▶️";
    }
}

//scroll-button
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.querySelector('.button__scroll');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    function scrollToTop() {
        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
        }
    }

    scrollToTopBtn.addEventListener('click', scrollToTop);
});