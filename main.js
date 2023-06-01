let images = [

    "images/img-1.png",
    "images/img-2.png",
    "images/img-3.png",
    "images/img-4.png",
    "images/img-5.png",
    "images/img-6.png"
];

let dice = document.querySelectorAll("img");
console.log(dice);

function roll() {
    let die_1 = Math.floor(Math.random() * 6);
    let die_2 = Math.floor(Math.random() * 6);
    console.log(die_1, die_2);

    document.querySelector("#die-1").setAttribute("src", images[die_1]);
    document.querySelector("#die-2").setAttribute("src", images[die_2]);

        if ( die_1 < die_2) {
            document.getElementById("winner").innerText = "Player 2 Won";
        } else if (die_1 > die_2) {
            document.getElementById("winner").innerText = "Player 1 Won";
        } else {
            document.getElementById("winner").innerText = "Draw";
        }
}


