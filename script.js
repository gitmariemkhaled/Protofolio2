window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById('loading-overlay').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000);
});

let category = document.querySelector(".caty");
let cat = document.querySelector(".cat");
let linksPages = document.querySelector(".page-links");
let pages = document.querySelector(".pages");
let iconi = document.querySelector(".iconi");
let naving = document.querySelector(".naving");

category.addEventListener("mouseover", function () {
    cat.classList.replace("d-none", "d-opacity");
});

category.addEventListener("mouseout", function () {
    cat.classList.replace("d-opacity", "d-none");
});

linksPages.addEventListener("mouseover", function () {
    pages.classList.replace("d-none", "d-opacity");
});
linksPages.addEventListener("mouseout", function () {
    pages.classList.replace("d-opacity", "d-none");
})



var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".arrow-next",
        prevEl: ".arrow-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});



document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('#section-one .right-cont ul li');
    const rows = document.querySelectorAll('#section-one .products .row');
    const featuredProducts = rows[0].children; // All boxes in the first row

    function resetBoxLayout() {
        Array.from(featuredProducts).forEach(box => {
            box.style.width = ''; // Reset any inline width styles
            box.style.display = ''; // Reset any inline display styles
        });
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove 'activing' class from all tabs
            tabs.forEach(t => t.classList.remove('activing'));
            tab.classList.add('activing');

            // Hide all rows initially
            rows.forEach(row => row.style.display = 'none');

            // Reset the display of featured products to all visible
            resetBoxLayout(); // Ensure boxes are properly reset

            // Show specific rows based on the tab clicked
            if (index === 0 && window.innerWidth >= 992) { // Featured
                rows[0].style.display = 'flex'; // Show first row
                rows[1].style.display = 'flex'; // Show second row
            } else if (index === 1 && window.innerWidth >= 992) { // On Sale
                rows[0].style.display = 'flex'; // Show first row
                rows[1].style.display = 'none'; // Hide second row
            } else if (index === 2 && window.innerWidth >= 992) { // Best Rated
                rows[0].style.display = 'flex'; // Show first row
                // Hide all but the first three boxes in the first row
                Array.from(featuredProducts).forEach((box, idx) => {
                    box.style.display = (idx < 3) ? 'flex' : 'none';
                });
                rows[1].style.display = 'none'; // Hide second row
            } else if (index === 0 && window.innerWidth <= 992) {
                rows[0].style.display = 'grid'; // Show first row
                rows[1].style.display = 'grid'; // Show second row
            } else if (index === 1 && window.innerWidth <= 992) {
                rows[0].style.display = 'grid'; // Show first row
                rows[1].style.display = 'none'; // Hide second row
            } else if (index === 2 && window.innerWidth <= 992) {
                rows[0].style.display = 'grid'; // Show first row
                // Hide all but the first three boxes in the first row
                Array.from(featuredProducts).forEach((box, idx) => {
                    box.style.display = (idx < 3) ? 'grid' : 'none';
                });
                rows[1].style.display = 'none'; // Hide second row
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('#deals .list ul li');
    const rows = document.querySelectorAll('#section-two .products .row');
    const featuredProducts = rows[0].children; // All boxes in the first row

    function resetBoxLayout() {
        Array.from(featuredProducts).forEach(box => {
            box.style.width = ''; // Reset any inline width styles
            box.style.display = ''; // Reset any inline display styles
        });
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove 'activingg' class from all tabs
            tabs.forEach(t => t.classList.remove('activingg'));

            // Add 'activingg' class to the clicked tab
            tab.classList.add('activingg');

            // Hide all rows initially
            rows.forEach(row => row.style.display = 'none');

            // Reset the display of featured products to all visible
            resetBoxLayout(); // Ensure boxes are properly reset

            // Show specific rows based on the tab clicked
            if (index === 0 && window.innerWidth >= 992) { // Featured
                rows[0].style.display = 'flex'; // Show first row
                rows[1].style.display = 'flex'; // Show second row
            } else if (index === 1 && window.innerWidth >= 992) { // Audio & Videos
                rows[0].style.display = 'none'; // Hide first row
                rows[1].style.display = 'flex'; // Show second row
            } else if (index === 2 && window.innerWidth >= 992) { // Laptops & Computers
                rows[0].style.display = 'flex'; // Show first row
                // Hide all but the first two boxes in the first row
                Array.from(featuredProducts).forEach((box, idx) => {
                    box.style.display = (idx < 2) ? 'flex' : 'none';
                });
                rows[1].style.display = 'none'; // Hide second row
            } else if (index === 0 && window.innerWidth <= 992) {
                rows[0].style.display = 'grid'; // Show first row
                rows[1].style.display = 'grid'; // Show second row
            } else if (index === 1 && window.innerWidth <= 992) {
                rows[0].style.display = 'none'; // Hide first row
                rows[1].style.display = 'grid'; // Show second row
            } else if (index === 2 && window.innerWidth <= 992) {
                rows[0].style.display = 'grid'; // Show first row
                // Hide all but the first two boxes in the first row
                Array.from(featuredProducts).forEach((box, idx) => {
                    box.style.display = (idx < 2) ? 'grid' : 'none';
                });
                rows[1].style.display = 'none'; // Hide second row
            }
        });
    });
});





