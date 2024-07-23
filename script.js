document.querySelectorAll('.faqs').forEach(faq => {
  const plusButton = faq.querySelector('.plus');
  const minusButton = faq.querySelector('.minus');
  const textElement = faq.querySelector('p');

  plusButton.addEventListener('click', () => {
    textElement.classList.add('visible');
    plusButton.classList.add('hidden');
    minusButton.classList.remove('hidden');
  });

  minusButton.addEventListener('click', () => {
    textElement.classList.remove('visible');
    plusButton.classList.remove('hidden');
    minusButton.classList.add('hidden');
  });
});
