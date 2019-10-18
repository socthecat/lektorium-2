let counter = 0;

function dioFunction() {
    ++counter;
    document.getElementById("counter").innerHTML = counter;

    let kono = new Audio("assets/kono.ogg");
    kono.play();
    if (counter > 15) {
        location.reload();
    }
}

let dio = document.getElementById("dio");
let rect = dio.getBoundingClientRect();
let X = rect.left + rect.width / 2;
let Y = rect.top + rect.height / 2;

addEventListener("mousemove", function(event) {
    dio.style.transform = "rotate(" + Math.atan2(event.clientY - Y, event.clientX - X) + "rad)";
});