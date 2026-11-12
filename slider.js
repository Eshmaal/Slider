const slider = document.getElementById("slider");
const images = slider.querySelectorAll("img");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const dotsContainer = document.getElementById("dots-container");

let currentImage = 1;
let timer;
const slideWidth = 500; // Matches container width

// Dynamically create pagination dots based on image count
images.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        currentImage = index + 1;
        updateSlider();
    });
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll(".dot");

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentImage - 1);
    });
}

function updateSlider() {
    clearTimeout(timer);

    if (currentImage > images.length) {
        currentImage = 1;
    } else if (currentImage < 1) {
        currentImage = images.length;
    }

    slider.style.transform = `translateX(-${(currentImage - 1) * slideWidth}px)`;
    updateDots();

    // Reset auto-slide timer
    timer = setTimeout(() => {
        currentImage++;
        updateSlider();
    }, 3500);
}

// Initial call
updateSlider();

nextBtn.addEventListener("click", () => {
    currentImage++;
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    currentImage--;
    updateSlider();
});