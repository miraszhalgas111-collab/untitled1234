
document.addEventListener("DOMContentLoaded", function () {

    // TASK 1: FORM VALIDATION
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("registerEmail").value.trim();
            const password = document.getElementById("password").value;
            const confirm = document.getElementById("confirmPassword").value;
            const message = document.getElementById("formMessage");

            if (!email || !password || !confirm) {
                message.textContent = "Please fill all fields!";
                message.style.color = "red";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                message.textContent = "Invalid email!";
                message.style.color = "red";
            } else if (password.length < 8) {
                message.textContent = "Password must be at least 8 characters!";
                message.style.color = "red";
            } else if (password !== confirm) {
                message.textContent = "Passwords do not match!";
                message.style.color = "red";
            } else {
                message.textContent = "Registration successful!";
                message.style.color = "green";
            }
        });
    }

    // TASK 2: ACCORDION FAQ
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            answer.classList.toggle("active");
        });
    });

    // TASK 3: POPUP FORM
    const popup = document.getElementById("popup");
    const openBtn = document.getElementById("openPopup");
    const closeBtn = document.getElementById("closePopup");
    const subscribeForm = document.getElementById("subscribeForm");

    if (popup && openBtn && closeBtn) {
        openBtn.addEventListener("click", function () {
            popup.style.display = "flex";
        });

        closeBtn.addEventListener("click", function () {
            popup.style.display = "none";
        });

        popup.addEventListener("click", function (event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                popup.style.display = "none";
            }
        });
    }

    if (subscribeForm && popup) {
        subscribeForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for subscribing!");
            popup.style.display = "none";
            subscribeForm.reset();
        });
    }

    // TASK 4: CHANGE BACKGROUND COLOR
    const colorBtn = document.getElementById("changeColor");

    if (colorBtn) {
        const colors = [
            "#ffffff",
            "#dbeafe",
            "#dcfce7",
            "#fef3c7",
            "#fce7f3"
        ];

        let index = 0;

        colorBtn.addEventListener("click", function () {
            index = (index + 1) % colors.length;
            document.body.style.backgroundColor = colors[index];
        });
    }

    // TASK 5: CURRENT DATE AND TIME
    const dateTime = document.getElementById("dateTime");

    if (dateTime) {
        function updateTime() {
            const now = new Date();

            dateTime.textContent = now.toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
        }

        updateTime();
        setInterval(updateTime, 1000);
    }
});
