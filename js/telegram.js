document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("tgForm");

    form.addEventListener("submit", e => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !phone) {
            alert("Заполните имя и телефон");
            return;
        }

        const text =
            `📦 Заявка с сайта\n\n` +
            `👤 Имя: ${name}\n` +
            `📞 Телефон: ${phone}\n` +
            `💬 Комментарий: ${message || "—"}`;

        window.open(
            "https://t.me/Sayonlega?text=" + encodeURIComponent(text),
            "_blank"
        );

        form.reset();
    });

});
