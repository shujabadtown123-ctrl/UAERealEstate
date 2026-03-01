// Form submission dummy handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('fullname').value;
    alert(`Thank you, ${name}! Your call back request has been successfully submitted. One of our agents will contact you shortly regarding the properties.`);
    this.reset();
});

// Pre-fill optional note if clicking from a property
function selectProperty(propertyName) {
    const noteArea = document.getElementById('optional-note');
    noteArea.value = `I would like to get more details or arrange a viewing for the property: ${propertyName}.`;
}

// Modal logic for Quiz
const quizBtn = document.getElementById('quiz-btn');
const quizModal = document.getElementById('quiz-modal');
const closeBtn = document.querySelector('.close-btn');
const finishQuiz = document.getElementById('finish-quiz');

quizBtn.addEventListener('click', () => {
    quizModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    quizModal.style.display = 'none';
});

finishQuiz.addEventListener('click', () => {
    alert("Thank you! Based on your answers, we have sent the best property matches to your screen. (Fictitious Data)");
    quizModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === quizModal) {
        quizModal.style.display = 'none';
    }
});
