document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-item .nav-link");

    window.addEventListener("scroll", function () {
        let fromTop = window.scrollY + 100;

        navLinks.forEach((link) => {
            let section = document.querySelector(link.getAttribute("href"));
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                navLinks.forEach((link) => link.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });
});

// Scroll up Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTop.style.display = "block"; // Ipakita ang button
    } else {
        backToTop.style.display = "none"; // Itago kapag nasa itaas pa
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Effects
AOS.init();

// Catalogue circles
const videoIds = [
    "WmRISVU62A0",
    "8O4L89Jcu5Y",
    "3b-3tI0_5YE",
    "HR2spgZEFJI",
    "AoUX2XHIL5A"
];

let currentIndex = 0;
let player;
let isPlaying = false;
let autoNextTimer;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoFrame', {
        videoId: videoIds[currentIndex],
        playerVars: {
            rel: 0,
            enablejsapi: 1
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    startAutoNext();
}

function changeVideo(index) {
    if (player) {
        currentIndex = index;
        player.loadVideoById(videoIds[index]); // Magpalit ng video gamit ang API
        updateDots();
        clearInterval(autoNextTimer);
        startAutoNext();
    }
}

function updateDots() {
    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        autoNextVideo(); // Auto-next kapag tapos na
    } else if (event.data === YT.PlayerState.PLAYING) {
        isPlaying = true; // Huwag mag-auto-next habang nagpe-play
        clearInterval(autoNextTimer);
    } else if (event.data === YT.PlayerState.PAUSED) {
        isPlaying = false; // Payagan ang auto-next kapag naka-pause
        startAutoNext();
    }
}

function autoNextVideo() {
    currentIndex = (currentIndex + 1) % videoIds.length;
    changeVideo(currentIndex);
}

function startAutoNext() {
    clearInterval(autoNextTimer);
    autoNextTimer = setInterval(() => {
        if (!isPlaying) {
            autoNextVideo();
        }
    }, 5000); // Mag-auto-next kung hindi nagpe-play
}

// Load YouTube API Script
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Products
document.querySelectorAll('.product-image').forEach(img => {
    img.addEventListener('mouseover', function () {
        this.src = this.getAttribute('data-hover'); // Palitan ang image sa hover
    });

    img.addEventListener('mouseout', function () {
        this.src = this.getAttribute('data-original'); // Balik sa original pag wala nang hover
    });
});

// Food Solution
var input = document.querySelector("#phone");
window.intlTelInput(input, {
    initialCountry: "ph", // Default country
    preferredCountries: ["ph", "us", "gb"], // Preferred countries
    separateDialCode: true, // Show separate country code
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // Required for formatting
});


// Mobile Search Bar
document.getElementById("search-icon").addEventListener("click", function() {
    let searchBox = document.getElementById("search-box");
    let searchInput = document.getElementById("search-input");

    // Toggle the search box
    if (searchBox.classList.contains("d-none")) {
        searchBox.classList.remove("d-none");
        searchInput.focus();
    } else {
        searchBox.classList.add("d-none");
        searchInput.value = ""; // Clear input when closing
    }
});

// Desktop Search Bar
document.getElementById("search-icon-desktop").addEventListener("click", function() {
    let searchBox = document.getElementById("search-box-desktop");
    let searchInput = document.getElementById("search-input-desktop");

    // Toggle the search box
    if (searchBox.classList.contains("d-none")) {
        searchBox.classList.remove("d-none");
        searchInput.focus();
    } else {
        searchBox.classList.add("d-none");
        searchInput.value = ""; // Clear input when closing
    }
});

// Product View Images
document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("mainImage");
    const thumbnails = document.querySelectorAll(".thumb-img");
    const images = ["../assets/img/black.jpg", "thumb1.jpg", "thumb2.jpg", "thumb3.jpg"];
    let currentIndex = 0;

    // Function para palitan ang main image
    function changeImage(src) {
        mainImage.style.opacity = 0;
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = 1;
        }, 300);
    }

    // Event listener para sa mga thumbnail
    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", function () {
            const newSrc = this.getAttribute("data-src");
            changeImage(newSrc);
        });
    });

    // Auto slideshow function
    function autoSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage(images[currentIndex]);
    }

    // Simulan ang auto slideshow every 3 seconds
    setInterval(autoSlide, 3000);
});

// Product Details



