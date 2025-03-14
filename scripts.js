const sayings = [
    "Connecting outstanding talent with exceptional opportunities",
    "SAP BI Tools + Tableau + QLIKVIEW",
    "Flexibility + Agility + Customer Centricity",
    "Unlocking potential through innovative career solutions"
];

let currentIndex = 0;
const slideHeading = document.getElementById('slide-heading');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function showSaying(index) {
    // Animate out current text
    slideHeading.classList.remove('slide-in');
    slideHeading.classList.add('slide-out');

    setTimeout(() => {
        slideHeading.textContent = sayings[index]; // Change text
        slideHeading.classList.remove('slide-out');
        slideHeading.classList.add('slide-in');
    }, 500); // Wait for the transition before changing text
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % sayings.length;
    showSaying(currentIndex);
}

// Auto-slide every 3 seconds
let slideInterval = setInterval(nextSlide, 3000);

// Event listeners for manual navigation
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? sayings.length - 1 : currentIndex - 1;
    showSaying(currentIndex);
    resetAutoSlide();
});

nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

// Reset auto-slide when manually clicking
function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Initialize with first saying
showSaying(currentIndex);


// CAPTCHA validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    if (grecaptcha && !grecaptcha.getResponse().length) {
        e.preventDefault();
        alert('Please complete the CAPTCHA.');
    }
});