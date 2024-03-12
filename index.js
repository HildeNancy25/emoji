const emojiFace = document.getElementById("emoji");
// const emojiFace = document.querySelector("#emoji");
const generate = document.getElementById("btn");
const emo = ["😘", "🌭", "😒", "🥗", "😉", "🍔", "😍" ,"🌮"];

// emojiFace.innerHTML = 'wow!';

const displayEmo = () => {
    var a = Math.floor(Math.random() * emo.length);   
    let display = emo[a];
    emojiFace.innerHTML = display;
}

// generate.addEventListener("click", displayEmo);
generate.addEventListener("click" , displayEmo);


