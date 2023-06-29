const stack = document.querySelector('.card-stack');
const cards = stack.querySelectorAll('.card');
const rejectButton = document.querySelector('.reject-button');
const acceptButton = document.querySelector('.accept-button');

let currentCardIndex = 0;

function showNextCard() {
  cards[currentCardIndex].classList.remove('active');
  currentCardIndex++;
  
  if (currentCardIndex >= cards.length) {
    currentCardIndex = 0;
  }
  
  cards[currentCardIndex].classList.add('active');
}

rejectButton.addEventListener('click', showNextCard);
acceptButton.addEventListener('click', showNextCard);

showNextCard(); // Show the first card initially