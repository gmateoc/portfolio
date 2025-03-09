
document.getElementById("year").textContent = new Date().getFullYear();


document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("nnnfxcwvAzEUp7nnr");

    const form = document.getElementById("contact-form");
    const dialog = document.getElementById("status-dialog");
    const statusMessage = document.getElementById("status-message");
    const closeDialogButton = document.getElementById("close-dialog");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const submitButton = form.querySelector("button[type=submit]");
        submitButton.disabled = true;

        emailjs.sendForm("service_seokg1w", "template_tta2kpp", form)
            .then(function () {
                statusMessage.textContent = "✅ ¡Mensaje enviado con éxito!";
                statusMessage.style.color = "green";
                form.reset();
                dialog.showModal();
                dialog.style.display = "flex";
            })
            .catch(function (error) {
                statusMessage.textContent = "❌ Error al enviar el mensaje. Inténtalo de nuevo.";
                statusMessage.style.color = "red";
                console.error("Error:", error);
                dialog.showModal();
                dialog.style.display = "flex";
            })
            .finally(() => {
                submitButton.disabled = false;
            });
    });

    // Cerrar el dialog al hacer clic en el botón
    closeDialogButton.addEventListener("click", function () {
        dialog.close();
        dialog.style.display = "none";
    });
});
