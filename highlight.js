window.onload = function() {
    document.querySelector('.animated-text').classList.add('animate');
};
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on ' + card.querySelector('h2').innerText);
    });
 });
 // Animate cards when they come into view
const cards = document.querySelectorAll('.card');

const options = {
   rootMargin: '0px',
   threshold: 0.1 // Trigger when at least 10% of the card is visible
};

const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
       if (entry.isIntersecting) {
           entry.target.classList.add('show'); // Add show class to animate in
       }
   });
}, options);

// Observe each card
cards.forEach(card => {
   observer.observe(card);
});