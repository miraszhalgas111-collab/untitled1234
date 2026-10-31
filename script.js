
document.addEventListener("DOMContentLoaded", function () {

    // TASK 1:
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

    //TASK 2
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            answer.classList.toggle("active");
        });
    });

    // TASK 3
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

    // TASK 4
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

    // TASK 5
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

        const stars = document.querySelectorAll(".star");
        const ratingMessage = document.getElementById("ratingMessage");

        stars.forEach(function (star) {
            star.addEventListener("click", function () {

                const rating = Number(this.dataset.value);

                stars.forEach(function (item) {
                    const value = Number(item.dataset.value);

                    if (value <= rating) {
                        item.classList.add("active");
                    } else {
                        item.classList.remove("active");
                    }
                });

                ratingMessage.textContent =
                    "You rated us " + rating + " out of 5 stars!";
            });
        });


});

document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.getElementById("readMoreBtn");
    const extraInfo = document.getElementById("extraInfo");

    if (readMoreBtn && extraInfo) {
        readMoreBtn.addEventListener("click", function () {
            if (extraInfo.style.display === "none") {
                extraInfo.style.display = "block";
                readMoreBtn.textContent = "Read Less";
            } else {
                extraInfo.style.display = "none";
                readMoreBtn.textContent = "Read More";
            }
        });
    }
});

// DARK MODE
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeToggle.textContent = "☀️ Light Mode";
            } else {
                themeToggle.textContent = "🌙 Dark Mode";
            }
        });
    }
});


// TASK 2 - CURRENT TIME
document.addEventListener("DOMContentLoaded", function () {

    const showTimeBtn = document.getElementById("showTimeBtn");
    const currentTime = document.getElementById("currentTime");

    if (showTimeBtn && currentTime) {
        showTimeBtn.addEventListener("click", function () {
            const time = new Date().toLocaleTimeString();
            currentTime.textContent = "Current Time: " + time;
        });
    }

});

// TASK - KEYBOARD NAVIGATION
document.addEventListener("DOMContentLoaded", function () {

    const menuItems = document.querySelectorAll(
        "nav a, .navbar a"
    );

    menuItems.forEach(function (item, index) {
        item.addEventListener("keydown", function (event) {

            if (event.key === "ArrowRight") {
                event.preventDefault();
                const next = (index + 1) % menuItems.length;
                menuItems[next].focus();
            }

            if (event.key === "ArrowLeft") {
                event.preventDefault();
                const prev =
                    (index - 1 + menuItems.length) % menuItems.length;
                menuItems[prev].focus();
            }

        });
    });

});

// ASSIGNMENT 5 - CALLBACK FUNCTION
document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll("#multiStepForm .form-step");
    const nextBtn = document.getElementById("nextStep");
    const backBtn = document.getElementById("backStep");

    if (!steps.length || !nextBtn || !backBtn) return;

    let currentStep = 0;

    function showStep(index) {
        steps.forEach((step, i) => {
            step.hidden = i !== index;
        });

        backBtn.hidden = index === 0;
        nextBtn.textContent =
            index === steps.length - 1 ? "Finish" : "Next";
    }

    function changeStep(direction, callback) {
        const nextIndex = currentStep + direction;

        if (nextIndex >= 0 && nextIndex < steps.length) {
            currentStep = nextIndex;
            callback(currentStep);
        }
    }

    nextBtn.addEventListener("click", function () {
        if (currentStep === 0) {
            const name = document.getElementById("clientName");
            if (!name.reportValidity()) return;
        }

        if (currentStep === 1) {
            const name = document.getElementById("clientName").value;
            const type = document.getElementById("businessType").value;

            document.getElementById("formSummary").textContent =
                "Name: " + name + " | Business: " + type;
        }

        if (currentStep === steps.length - 1) {
            alert("Consultation form completed!");
            return;
        }

        changeStep(1, showStep);
    });

    backBtn.addEventListener("click", function () {
        changeStep(-1, showStep);
    });

    showStep(currentStep);
});

// ASSIGNMENT 5 - SWITCH STATEMENT
document.addEventListener("DOMContentLoaded", function () {
    const greetingBtn = document.getElementById("greetingBtn");
    const greetingTime = document.getElementById("greetingTime");
    const greetingResult = document.getElementById("greetingResult");

    if (!greetingBtn || !greetingTime || !greetingResult) return;

    greetingBtn.addEventListener("click", function () {
        let message;

        switch (greetingTime.value) {
            case "morning":
                message = "Good morning! Start your business day!";
                break;

            case "afternoon":
                message = "Good afternoon! Keep growing your business!";
                break;

            case "evening":
                message = "Good evening! Review your financial goals!";
                break;

            default:
                message = "Welcome to Business & Finance!";
        }

        greetingResult.textContent = message;
    });
});

// FINANCE TOPICS
const financeBtn = document.getElementById("financeBtn");

if (financeBtn) {
    financeBtn.addEventListener("click", function () {
        const topic = document.getElementById("financeTopic").value;
        const result = document.getElementById("financeResult");

        if (topic === "saving") {
            result.textContent = "Saving helps you keep money for the future.";
        } else if (topic === "investment") {
            result.textContent = "Investment helps your money grow over time.";
        } else if (topic === "budget") {
            result.textContent = "Budgeting helps manage income and expenses.";
        } else {
            result.textContent = "Please choose a topic!";
        }
    });
}

// BUSINESS GREETING
const greetingBtn = document.getElementById("greetingBtn");

if (greetingBtn) {
    greetingBtn.addEventListener("click", function () {
        const time = document.getElementById("greetingTime").value;
        const result = document.getElementById("greetingResult");

        if (time === "morning") {
            result.textContent = "Good morning! Have a productive day!";
        } else if (time === "afternoon") {
            result.textContent = "Good afternoon! Keep working hard!";
        } else if (time === "evening") {
            result.textContent = "Good evening! Great work today!";
        }
    });
}

// ASSIGNMENT 5

document.addEventListener("DOMContentLoaded", function () {

    const business = {
        name: "Business & Finance",
        service: "Financial Consulting",
        experience: 5,

        getDetails: function () {
            return "Company: " + this.name +
                " | Service: " + this.service +
                " | Experience: " + this.experience + " years";
        }
    };

    const infoBtn = document.getElementById("businessInfoBtn");
    const infoResult = document.getElementById("businessInfoResult");

    if (infoBtn && infoResult) {
        infoBtn.addEventListener("click", function () {
            infoResult.textContent = business.getDetails();
        });
    }
});

// ASSIGNMENT 5

document.addEventListener("DOMContentLoaded", function () {

    const services = [
        "Financial Planning",
        "Investment Consulting",
        "Business Budgeting",
        "Risk Management",
        "Financial Analysis"
    ];

    const servicesBtn = document.getElementById("servicesBtn");
    const servicesList = document.getElementById("servicesList");

    if (servicesBtn && servicesList) {
        servicesBtn.addEventListener("click", function () {

            servicesList.innerHTML = "";

            for (let i = 0; i < services.length; i++) {
                const item = document.createElement("li");
                item.textContent = services[i];
                servicesList.appendChild(item);
            }

        });
    }
});

// Relaxing notification sound
const soundBtn = document.getElementById("soundBtn")

if (soundBtn) {
    soundBtn.addEventListener("click", function () {
        const audio = new (window.AudioContext ||
            window.webkitAudioContext)();

        const notes = [261.63, 329.63, 392.00, 523.25];

        notes.forEach(function (frequency, index) {
            const oscillator = audio.createOscillator();
            const gain = audio.createGain();

            oscillator.type = "sine";
            oscillator.frequency.value = frequency;

            oscillator.connect(gain);
            gain.connect(audio.destination);

            const start = audio.currentTime + index * 0.45;

            gain.gain.setValueAtTime(0.0001, start);
            gain.gain.exponentialRampToValueAtTime(
                0.045, start + 0.15
            );
            gain.gain.exponentialRampToValueAtTime(
                0.0001, start + 1.2
            );

            oscillator.start(start);
            oscillator.stop(start + 1.2);
        });
    });
}

// ASSIGNMENT 5

document.addEventListener("DOMContentLoaded", function () {

    const animateBtn = document.getElementById("animateBtn");
    const animationBox = document.getElementById("animationBox");

    if (animateBtn && animationBox) {
        animateBtn.addEventListener("click", function () {
            animationBox.classList.toggle("active");
        });
    }
});


$(document).ready(function () {
    console.log("jQuery is ready!");

});
