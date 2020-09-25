$(document).ready(function() {
  $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu, .top, .bottom, .home, .work,.process').toggleClass('active');
      $('body').toggleClass('lock');
  })
})



let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
};


function toggle() {
    let trailer = document.querySelector(".trailer");
    let video = document.querySelector("video");
    let home = document.querySelector('html');
    home.classList.toggle('bg')
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
};

