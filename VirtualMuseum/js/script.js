
const museum = document.querySelector(".museum");

/* =======================
   Horizontal Mouse Wheel
======================= */

window.addEventListener("wheel", (e) => {
    e.preventDefault();

    museum.scrollLeft += e.deltaY;
}, {
    passive: false
});

