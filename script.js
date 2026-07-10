// =========================================
// HousingRental
// script.js
// =========================================

// Код виконується після повного завантаження сторінки
document.addEventListener("DOMContentLoaded", function () {

    console.log("HousingRental успішно завантажено!");

    // -----------------------------
    // Кнопка "Увійти"
    // -----------------------------

    const loginButton = document.querySelector(".login-btn");

    if (loginButton) {
        loginButton.addEventListener("click", function () {
            alert("Сторінка входу буде додана пізніше.");
        });
    }

    // -----------------------------
    // Кнопка "Пошук"
    // -----------------------------

    const searchButton = document.querySelector(".search-box button");

    if (searchButton) {

        searchButton.addEventListener("click", function () {

            const cityInput = document.querySelector(".search-box input[type='text']");

            if (!cityInput) return;

            const city = cityInput.value.trim();

            if (city === "") {

                alert("Введіть назву міста.");

                cityInput.focus();

                return;

            }

            alert("Виконується пошук житла у місті: " + city);

        });

    }

    // -----------------------------
    // Кнопки "Переглянути"
    // -----------------------------

    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card = this.closest(".card");

            if (!card) return;

            const title = card.querySelector("h3");

            if (!title) return;

            alert("Обрано:\n\n" + title.textContent);

        });

    });

    // -----------------------------
    // Анімація відгуків
    // -----------------------------

    const reviews = document.querySelectorAll(".review");

    reviews.forEach(function (review) {

        review.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-5px)";

        });

        review.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0)";

        });

    });

    // -----------------------------
    // Поточний рік у Footer
    // -----------------------------

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =
            "© " +
            new Date().getFullYear() +
            " HousingRental. Всі права захищені.";

    }

});
