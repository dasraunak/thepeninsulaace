var bar=document.querySelector("#bar").children;
var hotels=document.querySelector(".hotels");
var places=document.querySelector(".places");
var welcome=document.querySelector("#welcome");

bar[0].addEventListener("click",function(){
    hotels.style.display="inline";
    places.style.display="none";
    welcome.style.display="none";
});

bar[1].addEventListener("click",function(){
   hotels.style.display="none";
   places.style.display="inline";
   welcome.style.display="none";
});
