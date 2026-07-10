// =======================================
// HousingRental
// JavaScript
// =======================================

// Повідомлення після завантаження сторінки
window.onload = function () {
    console.log("HousingRental успішно завантажено!");
};

// =======================================
// Кнопка "Увійти"
// =======================================

const loginButton = document.querySelector(".login-btn");

if (loginButton) {
    loginButton.addEventListener("click", function () {
        alert("Функція входу буде реалізована на наступному етапі.");
    });
}

// =======================================
// Кнопка "Пошук"
// =======================================

const searchButton = document.querySelector(".search-box button");

if (searchButton) {

    searchButton.addEventListener("click", function () {

        const city = document.querySelector(".search-box input[type='text']").value;

        if (city === "") {

            alert("Будь ласка, введіть назву міста.");

        } else {

            alert("Пошук житла у місті: " + city);

        }

    });

}

// =======================================
// Кнопки "Переглянути"
// =======================================

const apartmentButtons = document.querySelectorAll(".card button");

apartmentButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const apartmentName =
            this.parentElement.querySelector("h3").textContent;

        alert("Відкриваємо сторінку:\n" + apartmentName);

    });

});

// =======================================
// Відгуки
// =======================================

const reviews = document.querySelectorAll(".review");

reviews.forEach(function(review){

    review.addEventListener("mouseenter", function(){

        this.style.transform = "scale(1.03)";
        this.style.transition = "0.3s";

    });

    review.addEventListener("mouseleave", function(){

        this.style.transform = "scale(1)";

    });

});

// =======================================
// Footer
// =======================================

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML =
    "© " + year + " HousingRental. Всі права захищені.";

// =======================================
// Інформація у консолі
// =======================================

console.log("--------------------------------");
console.log("HousingRental");
console.log("Практична робота");
console.log("Версія 1.0");
console.log("--------------------------------");
