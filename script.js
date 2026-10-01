document.addEventListener("DOMContentLoaded", () => {
    const introPage = document.getElementById("introPage");
    const questionPage = document.getElementById("questionPage");
    const successPage = document.getElementById("successPage");
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const confirmBtn = document.querySelector(".ig-confirm");
    const deleteBtn = document.querySelector(".ig-delete");
    const igNote = document.getElementById("igNote");
    const loveDate = document.getElementById("loveDate");

    // หน้าแรก -> หน้าขอเป็นแฟน
    if (confirmBtn && introPage && questionPage) {
        confirmBtn.addEventListener("click", () => {
            introPage.classList.add("intro-out");

            setTimeout(() => {
                introPage.classList.add("hidden");
                questionPage.classList.remove("hidden");
            }, 350);
        });
    }

    // ปุ่มลบในหน้า IG
    if (deleteBtn && igNote) {
        deleteBtn.addEventListener("click", () => {
            igNote.textContent = "ลบไม่ได้หรอก 🤭 ลองกดยืนยันดูน้า 💕";
        });
    }

    // ปุ่ม "ขออยู่คนเดียว" หนี
    function moveNoButton() {
        if (!noBtn) return;

        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;
        const maxX = Math.max(20, window.innerWidth - buttonWidth - 20);
        const maxY = Math.max(20, window.innerHeight - buttonHeight - 20);
        const randomX = 20 + Math.random() * Math.max(0, maxX - 20);
        const randomY = 20 + Math.random() * Math.max(0, maxY - 20);

        noBtn.style.position = "fixed";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
        noBtn.style.zIndex = "999";
    }

    if (noBtn) {
        noBtn.addEventListener("mouseenter", moveNoButton);
        noBtn.addEventListener("touchstart", (event) => {
            event.preventDefault();
            moveNoButton();
        }, { passive: false });
        noBtn.addEventListener("click", (event) => {
            event.preventDefault();
            moveNoButton();
        });
    }

    // กดตกลงเป็นแฟน
    if (yesBtn && questionPage && successPage) {
        yesBtn.addEventListener("click", () => {
            questionPage.classList.add("hidden");
            successPage.classList.remove("hidden");

            if (loveDate) {
                loveDate.textContent = "10/10/2026";
            }

            for (let i = 0; i < 30; i++) {
                setTimeout(createHeart, i * 100);
            }
        });
    }

    function createHeart() {
        const heart = document.createElement("div");
        const hearts = ["💗", "💖", "💕", "💞", "🌸"];

        heart.className = "heart";
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.fontSize = `${Math.random() * 20 + 15}px`;
        heart.style.animationDuration = `${Math.random() * 3 + 4}s`;

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }

    // หัวใจพื้นหลัง
    setInterval(createHeart, 900);
});
