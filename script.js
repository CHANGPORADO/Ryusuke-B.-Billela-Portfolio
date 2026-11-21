
/* CHANGE YOUR ANNIVERSARY DATE HERE */

const anniversaryDate = new Date("2020-11-22T00:00:00");


/* LIVE ANNIVERSARY COUNTER */

function updateTimer() {

    const now = new Date();

    let difference = now - anniversaryDate;

    if (difference < 0) {

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateTimer();

setInterval(updateTimer, 1000);


/* SCROLL TO LOVE LETTER */

function scrollToLetter() {

    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });

}


/* OPEN LOVE LETTER */

function openLetter() {

    const letter = document.getElementById("loveLetter");

    if (letter.style.display === "block") {

        letter.style.display = "none";

    } else {

        letter.style.display = "block";

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


/* FLOATING HEART ANIMATION */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = ["❤️", "💕", "💗", "💖", "💘"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 500);


/* SPECIAL SURPRISE */

function showSurprise() {

    const message =
        document.getElementById("surpriseMessage");

    message.innerHTML =
        "I LOVE YOU SO MUCH!";

    message.style.animation = "none";

    void message.offsetWidth;

    message.style.animation = "appear 1s ease";

    for (let i = 0; i < 30; i++) {

        setTimeout(createHeart, i * 100);

    }

}


/* BACKGROUND MUSIC */

const music = document.getElementById("music");

function toggleMusic() {

    const button =
        document.getElementById("musicButton");

    if (music.paused) {

        music.play().then(() => {

            button.innerHTML = "Pause Music";

        }).catch(() => {

            button.innerHTML = "Music unavailable";

        });

    } else {

        music.pause();

        button.innerHTML = "Play Music";

    }

}
