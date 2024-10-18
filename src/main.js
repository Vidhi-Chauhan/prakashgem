document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".hide-scroller");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  nextButton.addEventListener("click", () => {
    slider.scrollBy({
      top: 0,
      left: 320, // Scroll by 320px, which is the width of each card + margin
      behavior: "smooth",
    });
  });

  prevButton.addEventListener("click", () => {
    slider.scrollBy({
      top: 0,
      left: -320, // Scroll back by 320px
      behavior: "smooth",
    });
  });
});

const cursor = document.querySelector(".mouse-curser");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX + window.scrollX; // Account for horizontal scroll
  const y = e.clientY + window.scrollY; // Account for vertical scroll

  // cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`; // Adjust for cursor size
});
const placeholders = ["Gemstone", "Rudraksha", "Mala"];
let currentIndex = 0;

function changePlaceholder() {
  const searchBox = document.getElementById("searchBox");
  searchBox.placeholder = placeholders[currentIndex];
  currentIndex = (currentIndex + 1) % placeholders.length;
}

// Change placeholder every second
setInterval(changePlaceholder, 1000);
document.addEventListener("keydown", function (event) {
  const container = document.querySelector(".gemstone-list");

  if (event.key === "ArrowRight") {
    container.scrollBy({ left: 200, behavior: "smooth" }); // Scroll right
  } else if (event.key === "ArrowLeft") {
    container.scrollBy({ left: -200, behavior: "smooth" }); // Scroll left
  }
});
