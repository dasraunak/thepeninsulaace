function goto() {
    var city = document.querySelector("#browse>section>input").value.toLowerCase();
    var search = document.querySelector("#browse>section>a");
    search.href = "/" + city;
}
