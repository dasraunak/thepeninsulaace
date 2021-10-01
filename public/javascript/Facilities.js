const slide=document.querySelector('.slide');
const slideimage=document.querySelectorAll('.slide img');

let count=0;
const size=slideimage[0].clientWidth;
setInterval(function() {
    slide.style.transition = "transform 0.3s ease-in-out";
    count++;
    count%=5;
    slide.style.transform = "translate(" + (-(size+10) * count) + "px)";
},3000);
