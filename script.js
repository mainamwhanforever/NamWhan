const noBtn = document.getElementById("noBtn");
const questionPage = document.getElementById("questionPage");
const successPage = document.getElementById("successPage");


/* ==========================
   ปุ่มไม่ตกลงหนี
========================== */

function moveNoButton() {

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX =
        window.innerWidth - buttonWidth - 20;

    const maxY =
        window.innerHeight - buttonHeight - 20;

    const randomX =
        Math.max(
            20,
            Math.random() * maxX
        );

    const randomY =
        Math.max(
            20,
            Math.random() * maxY
        );


    noBtn.style.position = "fixed";

    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";

    noBtn.style.zIndex = "999";
}


/* Desktop */

noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


/* Mobile */

noBtn.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();
    }
);


/* กันเผลอกด */

noBtn.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        moveNoButton();
    }
);


/* ==========================
   กดตกลง
========================== */

function sayYes() {

    questionPage.classList.add("hidden");

    successPage.classList.remove("hidden");


    /* วันที่ปัจจุบัน */

    const today =
        new Date();


    const dateText1 =
        today.toLocaleDateString(
            "th-TH",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );

    const dateText = "10/10/2026"

    document.getElementById(
        "loveDate"
    ).textContent = dateText;


    /* ปล่อยหัวใจเยอะ ๆ */

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 100
        );

    }

}


/* ==========================
   HEART ANIMATION
========================== */

function createHeart() {

    const heart =
        document.createElement("div");


    const hearts = [
        "💗",
        "💖",
        "💕",
        "💞",
        "🌸"
    ];


    heart.className = "heart";


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random()
                * hearts.length
            )
        ];


    heart.style.left =
        Math.random()
        * 100
        + "vw";


    heart.style.fontSize =
        (
            Math.random()
            * 20
            + 15
        )
        + "px";


    heart.style.animationDuration =
        (
            Math.random()
            * 3
            + 4
        )
        + "s";


    document.body.appendChild(
        heart
    );


    setTimeout(
        () => heart.remove(),
        7000
    );

}


/* หัวใจพื้นหลัง */

setInterval(
    createHeart,
    900
);