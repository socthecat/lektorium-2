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
    // https://en.wikipedia.org/wiki/Atan2
    dio.style.transform = "rotate(" + Math.atan2(Y - event.clientY, X - event.clientX) + "rad)";
});