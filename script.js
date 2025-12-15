
let minus = document.getElementById("minusBtn");
let plus = document.getElementById("plusBtn");
let number = document.getElementById("number");

let count = 0;

plus.addEventListener("click", () => {
    count++;
    number.innerHTML = count;
});

minus.addEventListener("click", () => {
    count--;
    number.innerHTML = count;
});


let showBtn = document.getElementById("showBtn");
let hideBtn = document.getElementById("hideBtn");
let rasm = document.getElementById("rasm");

showBtn.addEventListener("click", () => {
    rasm.style.visibility = "visible";
});

hideBtn.addEventListener("click", () => {
    rasm.style.visibility = "hidden";
});

let pressBtn = document.getElementById("pressBtn");
let imgBox = document.getElementById("imgBox");

pressBtn.addEventListener("click", () => {
    imgBox.innerHTML = "";

    let img = document.createElement("img");
    img.src = "image.png";
    img.style.width = "200px";

    imgBox.appendChild(img);
});


let sendBtn = document.getElementById("sendBtn");
let message = document.getElementById("message");

sendBtn.addEventListener("click", () => {
    message.innerHTML = "Сообщение отправлено";
});
