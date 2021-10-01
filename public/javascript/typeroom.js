document.querySelector('.select-wrapper').addEventListener('click', function() {
    this.querySelector('.select').classList.toggle('open');
});
for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.select').querySelector('.select__trigger span').textContent = this.textContent;
        }
    })
}



var room_price=[4000,15000,2000];

var num_room=document.querySelectorAll("#number");
var date=document.querySelectorAll("#date");
var pay=document.getElementById("proceed_pay");
pay.addEventListener("click",()=>{
    totalcost();
});
function totalcost(){
    var cost=0;
    for(var i=0;i<3;i++){
        cost=cost+(room_price[i]*(num_room[i].value));
    }
    document.querySelector("#pricing>span>b").innerHTML=cost;
    var day0=date[0].value;
    var day1=date[1].value;
    var difference=Math.abs(day1-day0)/(3600*1000*24);
    console.log(difference);
}
