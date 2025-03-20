'use strict';

/**add event listener on multiple elements */


const addEventOnElements = function (elements, evenType, callback) {
    for (let i = 0, len = elements.length; i < len; i++ ) {
        elements[i].addEventListener(evenType, callback);
    }
}


/**mobile navbar toggle  */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active")
    overlay.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);


/** active header when window scroll down */

const header = document.querySelector("[data-header]");

const headerActive = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

window.addEventListener("scroll", headerActive);

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("documentModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.querySelector(".close");

    if (openModal && modal && closeModal) {
        // Дефинираме първоначално модала като скрит
        modal.style.display = "none";

        // При клик върху "документи" – отваря модала
        openModal.addEventListener("click", function (event) {
            event.preventDefault();
            modal.style.display = "flex";
        });

        // При клик върху "X" – затваря модала
        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });

        // При клик извън модала – също го затваря
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});

// Затваряне на навбара при избор на някой от бутоните
const navLinks = document.querySelectorAll(".navbar-link");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        // Затваряме навбара само ако е активен
        if (navbar.classList.contains("active")) {
            toggleNav();
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const footerForm = document.getElementById("footerContactForm");

    footerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Спира презареждането на страницата

        let formData = new FormData(footerForm);

        fetch("send-email.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert("Съобщението е изпратено успешно!");
            footerForm.reset();
        })
        .catch(error => {
            alert("Грешка при изпращане на съобщението.");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Кога да се активира анимацията (20% видимост)
    );
  
    elements.forEach(el => observer.observe(el));
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
        // Проверка дали потребителят е скролнал до долната част на страницата
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
            scrollToTopBtn.style.display = "block"; 
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("assets/таблица_полиамиди.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("tableContainer").innerHTML = data;
        })
        .catch(error => console.error("Грешка при зареждането на таблицата:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.querySelector(".materials-page .btn");

    if (backButton) { // Проверява дали бутонът съществува в страницата
        window.addEventListener("scroll", function () {
            // Проверява дали потребителят е скролнал до края на страницата
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
                backButton.classList.add("show"); // Показва бутона
            } else {
                backButton.classList.remove("show"); // Скрива бутона
            }
        });
    }
});
