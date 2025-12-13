document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // Toggle active class
            question.classList.toggle('active');

            // Toggle max-height for smooth animation
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }

            // Close other items (optional, keeping it open allows comparing answers)
            // faqQuestions.forEach(otherQuestion => {
            //     if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
            //         otherQuestion.classList.remove('active');
            //         otherQuestion.nextElementSibling.style.maxHeight = 0;
            //     }
            // });
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
