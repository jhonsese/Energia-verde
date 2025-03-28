document.addEventListener("DOMContentLoaded", function () {
    let alert = document.querySelector(".alert-success");
    if (alert) {
        alert.classList.add("show"); // Muestra la alerta
        setTimeout(() => {
            alert.style.opacity = "0"; // Desvanece la alerta
        }, 3000);
    }
});
