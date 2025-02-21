// ============ SISTEMA DE MENU ============
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", function(e) {
    e.stopPropagation();
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
});

document.addEventListener("click", function(e) {
    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
        menu.classList.remove("active");
        menuIcon.classList.remove("active");
    }
});

document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-3px)";
    });
    item.addEventListener("mouseleave", function() {
        this.style.transform = "translateY(0)";
    });
});

// ========== CÓDIGO DOS BOTÕES ==========
const message = document.getElementById("message");
if (message) {
    message.style.display = "none"; // Garante que a mensagem está totalmente oculta inicialmente
}

document.getElementById("yesButton").addEventListener("click", function() {
    if (message) {
        message.style.display = "flex";
    }
});

document.getElementById("noButton").addEventListener("mouseenter", function() {
    moveButton(this);
});

function moveButton(button) {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}

// ========== FUNÇÕES DE PARTILHA ==========
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}

function shareOnX() {
    const text = encodeURIComponent("I knew you would say yes! 💖");
    const url = encodeURIComponent(window.location.href);
    window.open(`https://x.com/intent/post?text=${text}&url=${url}`, "_blank");
}

function shareOnInstagram() {
    alert("Copie o link e compartilhe manualmente no Instagram!");
}

function shareOnTikTok() {
    alert("Copie o link e compartilhe manualmente no TikTok!");
}

function shareOnWhatsApp() {
    const text = encodeURIComponent("I knew you would say yes! 💖");
    const url = encodeURIComponent(window.location.href);
    window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, "_blank");
}

// ========== CORREÇÃO GSI_LOGGER ==========
window.google = window.google || {};
window.google.accounts = window.google.accounts || {};
window.google.accounts.id = window.google.accounts.id || {};
window.google.accounts.id.disableAutoSelect = function() {};
window.google.accounts.id.prompt = function() {};
console.log("Google One Tap desativado para evitar erros do FedCM.");