
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
                showToast("Registration successful!", "success");
            }
        });
    }


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
                showToast("Thanks for your rating!", "success");
            });
        });


});
// DARK MODE

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    function updateButton() {
        if (themeToggle) {
            if (document.body.classList.contains("dark-mode")) {
                themeToggle.textContent = "☀️ Light Mode";
            } else {
                themeToggle.textContent = "🌙 Dark Mode";
            }
        }
    }

    updateButton();

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }

            updateButton();
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

    // TASK 1: Live filter

    $("#liveSearch").on("keyup", function () {
        const q = $(this).val().toLowerCase().trim();

        // Save search query
        localStorage.setItem("financeSearch", q);

        $("#articleList .article-item").filter(function () {
            $(this).toggle(
                $(this).text().toLowerCase().indexOf(q) > -1
            );
        });

        $("#noResults").toggle(
            $("#articleList .article-item:visible").length === 0
        );
    });

// Restore previous search
    $(document).ready(function () {
        const savedSearch = localStorage.getItem("financeSearch");

        if (savedSearch) {
            $("#liveSearch").val(savedSearch).trigger("keyup");
        }
    });


// TASK 2: Autocomplete
    const titles = $("#articleList .article-item").map(function () {
        return $(this).text().trim();
    }).get();

    $("#liveSearch").on("input", function () {
        const q = $(this).val().toLowerCase().trim();
        const $box = $("#suggestions").empty();
        const matches = q ? titles.filter(t => t.toLowerCase().includes(q)).slice(0, 5) : [];
        if (!matches.length) { $box.hide(); return; }
        matches.forEach(t => $("<li>").text(t).appendTo($box));
        $box.show();
    });

    $("#suggestions").on("click", "li", function () {
        $("#liveSearch").val($(this).text()).trigger("keyup");
        $("#suggestions").hide();
    });

    $(document).on("click", function (e) {
        if (!$(e.target).closest(".search-wrap").length) $("#suggestions").hide();
    });

    $("#faqSearch").on("keyup", function () {
        const term = $(this).val().trim();
        let count = 0;

        $(".faq-question, .faq-answer p").each(function () {
            const $el = $(this);
            if ($el.data("orig") === undefined) $el.data("orig", $el.text().trim());
            const orig = $el.data("orig");

            if (term.length < 2) { $el.text(orig); return; }

            const safe = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const re = new RegExp("(" + safe + ")", "gi");
            const found = orig.match(re);

            if (found) {
                count += found.length;
                $el.html(orig.replace(re, '<mark class="highlight">$1</mark>'));
                if ($el.is("p")) $el.closest(".faq-answer").addClass("active");
            } else {
                $el.text(orig);
            }
        });

        $("#faqCount").text(term.length < 2 ? "" : count + " match(es) found");
    })

    $("body").prepend('<div id="scrollProgress"><div id="scrollBar"></div></div>');

    $(window).on("scroll resize", function () {
        const max = $(document).height() - $(window).height();
        const pct = max > 0 ? ($(window).scrollTop() / max) * 100 : 0;
        $("#scrollBar").css("width", pct + "%");
    });

    let counted = false;
    function runCounters() {
        if (counted || !$("#stats").length) return;
        if ($(window).scrollTop() + $(window).height() > $("#stats").offset().top + 50) {
            counted = true;
            $(".counter").each(function () {
                const $c = $(this);
                const target = Number($c.data("target"));
                $({ n: 0 }).animate({ n: target }, {
                    duration: 2000,
                    step: function (now) { $c.text(Math.floor(now)); },
                    complete: function () { $c.text(target); }
                });
            });
        }
    }
    $(window).on("scroll", runCounters);
    runCounters();

    $("#contactForm, #subscribeForm").on("submit", function (e) {
        e.preventDefault();

        const form = this;
        const emailInput = form.querySelector(
            "#email, #subscribeEmail"
        );
        const nameInput = form.querySelector("#name");
        const messageInput = form.querySelector("#message");

        const email = emailInput ? emailInput.value.trim() : "";

        if (nameInput && !nameInput.value.trim()) {
            showToast("Please enter your name!", "error");
            nameInput.focus();
            return;
        }

        if (!email) {
            showToast("Please enter your email!", "error");
            emailInput.focus();
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showToast("Please enter a valid email!", "error");
            emailInput.focus();
            return;
        }

        if (messageInput && !messageInput.value.trim()) {
            showToast("Please enter your message!", "error");
            messageInput.focus();
            return;
        }

        const $form = $(this);
        const $btn = $form.find("button[type='submit']");
        const original = $btn.html();

        $btn.prop("disabled", true).html('<span class="spinner"></span> Please wait...');

        setTimeout(function () {
            $btn.prop("disabled", false).html(original);
            $form[0].reset();
            if ($form.is("#subscribeForm")) $("#popup").hide();
            showToast("Form submitted successfully!", "success");
        }, 2000);
    });
    $(".copy-btn").on("click", function () {
        const $btn = $(this);
        const text = $btn.siblings("code").text();

        const done = function () {
            $btn.addClass("copied").find(".copy-icon").text("✔");
            showToast("Copied to clipboard!", "success");
            setTimeout(function () {
                $btn.removeClass("copied").find(".copy-icon").text("📋");
            }, 2000);
        };

        // ескі тәсіл: жасырын textarea арқылы көшіру
        const fallbackCopy = function () {
            const $tmp = $("<textarea>").val(text).appendTo("body").select();
            const ok = document.execCommand("copy");
            $tmp.remove();
            if (ok) {
                done();
            } else {
                showToast("Copy failed", "error");
            }
        };

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(done).catch(fallbackCopy);
        } else {
            fallbackCopy();
        }
    });

    $(".snippet code").on("copy", function () {
        showToast("Text copied!", "success");
    });

    function lazyLoad() {
        $("img.lazy:visible").each(function () {
            const $img = $(this);
            if ($img.offset().top < $(window).scrollTop() + $(window).height() + 100) {
                $img.attr("src", $img.attr("data-src")).removeClass("lazy").addClass("loaded");
            }
        });
    }
    $(window).on("scroll resize", lazyLoad);
    lazyLoad();

    const car = document.getElementById("businessCarousel");
    if (car) {
        car.addEventListener("slide.bs.carousel", function (e) {
            $(e.relatedTarget).find("img.lazy").each(function () {
                $(this).attr("src", $(this).attr("data-src")).removeClass("lazy");
            });
        });
    }

});


function showToast(message, type) {
    if (!$("#toastContainer").length) $("body").append('<div id="toastContainer"></div>');
    const $t = $('<div class="toast-msg"></div>').addClass(type || "success").text(message);
    $("#toastContainer").append($t);
    $t.hide().fadeIn(300).delay(2500).fadeOut(500, function () { $(this).remove(); });
}




// =====================================
// SIGN UP, LOGIN AND PROFILE
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const signupBox = document.getElementById("signupBox");
    const loginBox = document.getElementById("loginBox");
    const profileBox = document.getElementById("profileBox");

    // Егер бұл бетте тіркелу формасы болмаса, тоқтау
    if (!signupBox) return;

    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    // Show Login
    document.getElementById("showLogin").addEventListener("click", function () {
        signupBox.hidden = true;
        loginBox.hidden = false;
    });

    // Show Signup
    document.getElementById("showSignup").addEventListener("click", function () {
        loginBox.hidden = true;
        signupBox.hidden = false;
    });

    // SIGN UP

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const phone = document.getElementById("signupPhone").value.trim();
        const password = document.getElementById("signupPassword").value;

        const message = document.getElementById("signupMessage");
        const phoneMessage = document.getElementById("phoneMessage");

        // Clear previous messages
        message.textContent = "";
        phoneMessage.textContent = "";

        // Required fields
        if (!name || !email || !phone || !password) {
            message.textContent = "Please fill in all fields!";
            message.style.color = "red";
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            message.textContent = "Please enter a valid email!";
            message.style.color = "red";
            return;
        }

        // Phone validation
        if (!/^\+?[0-9]{10,15}$/.test(phone)) {
            phoneMessage.textContent = "Enter a valid phone number!";
            phoneMessage.style.color = "red";
            return;
        }

        // Password validation
        if (password.length < 8 ||
            !/[A-Z]/.test(password) ||
            !/[0-9]/.test(password)) {

            message.textContent =
                "Password needs 8 characters, one uppercase letter and one number!";

            message.style.color = "red";
            return;
        }

        // Save user
        const user = {
            name: name,
            email: email,
            phone: phone,
            password: password
        };

        localStorage.setItem("registeredUser", JSON.stringify(user));

        message.textContent = "Registration successful!";
        message.style.color = "green";

        signupForm.reset();
    });



// LOG IN
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
        const message = document.getElementById("loginMessage");

        message.textContent = "";

        if (!email || !password) {
            message.textContent = "Please fill in all fields!";
            message.style.color = "red";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            message.textContent = "Please enter a valid email!";
            message.style.color = "red";
            return;
        }

        const savedUser = JSON.parse(
            localStorage.getItem("registeredUser")
        );

        if (!savedUser || savedUser.email !== email ||
            savedUser.password !== password) {
            message.textContent = "Incorrect email or password!";
            message.style.color = "red";
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(savedUser));

        showProfile(savedUser);
    });


    // PROFILE
    function showProfile(user) {
        signupBox.hidden = true;
        loginBox.hidden = true;
        profileBox.hidden = false;

        document.getElementById("profileName").textContent =
            "Name: " + user.name;

        document.getElementById("profileEmail").textContent =
            "Email: " + user.email;
        document.getElementById("profilePhone").textContent =
            "Phone: " + (user.phone || "Not provided");
    }

    // LOG OUT
    document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");

        profileBox.hidden = true;
        loginBox.hidden = false;
    });

    // Restore session
    const loggedInUser = JSON.parse(
        localStorage.getItem("loggedInUser")
    );

    if (loggedInUser) {
        showProfile(loggedInUser);
    }
});



// =====================================
// LIVE CURRENCY EXCHANGE API
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const loadButton = document.getElementById("loadRatesBtn");

    // Run only on Finance page
    if (!loadButton) return;

    const loading = document.getElementById("currencyLoading");
    const error = document.getElementById("currencyError");

    async function loadCurrencyRates() {

        loading.textContent = "Loading exchange rates...";
        error.textContent = "";

        loadButton.disabled = true;

        try {
            const response = await fetch(
                "https://open.er-api.com/v6/latest/USD"
            );

            if (!response.ok) {
                throw new Error("API request failed");
            }

            const data = await response.json();

            if (data.result !== "success") {
                throw new Error("Unable to load currency data");
            }

            const rates = data.rates;

            document.getElementById("kztRate").textContent =
                "1 USD = " + rates.KZT.toFixed(2) + " KZT";

            document.getElementById("eurRate").textContent =
                "1 USD = " + rates.EUR.toFixed(4) + " EUR";

            document.getElementById("gbpRate").textContent =
                "1 USD = " + rates.GBP.toFixed(4) + " GBP";

            document.getElementById("rubRate").textContent =
                "1 USD = " + rates.RUB.toFixed(2) + " RUB";

            document.getElementById("currencyDate").textContent =
                "Last updated: " + data.time_last_update_utc;

            loading.textContent = "Exchange rates loaded successfully!";

        } catch (err) {

            loading.textContent = "";
            error.textContent =
                "Unable to load exchange rates. Please try again.";

            console.error("Currency API Error:", err);

        } finally {
            loadButton.disabled = false;
        }
    }

    loadButton.addEventListener("click", loadCurrencyRates);

    // Load rates automatically when Finance page opens
    loadCurrencyRates();

});




// COPY FINANCIAL SNIPPETS

document.addEventListener("click", async function (e) {

    const button = e.target.closest(".copy-btn");

    if (!button) return;

    const text = button.dataset.copy;

    try {
        await navigator.clipboard.writeText(text);

        button.textContent = "✓ Copied!";
        button.classList.add("copied");

        setTimeout(function () {
            button.textContent = "📋 Copy";
            button.classList.remove("copied");
        }, 2000);

    } catch (error) {
        button.textContent = "Copy failed!";
        console.error("Clipboard error:", error);
    }
});

document.querySelectorAll(".toggle-password").forEach(function(button) {
    button.addEventListener("click", function() {
        const input = document.getElementById(this.dataset.target);

        if (input.type === "password") {
            input.type = "text";
            this.textContent = "👁";
        } else {
            input.type = "password";
            this.textContent = "👁";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {
        question.addEventListener("click", function () {
            const faqItem = question.closest(".faq-item");

            if (!faqItem) return;

            faqItem.classList.toggle("active");
        });
    });
});

