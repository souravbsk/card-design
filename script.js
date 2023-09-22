function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const blinkingCardsContainer = document.querySelector(".blinking-cards");
for (let i = 0; i < 1000; i++) {
  const blinkingCard = document.createElement("div");
  blinkingCard.className = "blinking-card";
  blinkingCard.style.left = `${getRandom(0, 300)}%`;
  blinkingCard.style.top = `${getRandom(0, 200)}%`;
  blinkingCard.style.animationDuration = `${getRandom(5, 15)}s`;
  if (i % 2 === 0) {
    blinkingCard.style.animationDelay = `${getRandom(1, 5)}s`;
    blinkingCard.style.opacity = 0;
  } else {
    blinkingCard.style.animationDelay = `${getRandom(11, 20)}s`;
    blinkingCard.style.opacity = 0;
  }
  blinkingCardsContainer.appendChild(blinkingCard);
}
