const minusButtons = document.querySelectorAll('.minus');
const plusButtons = document.querySelectorAll('.plus');
const quantityInputs = document.querySelectorAll('.quantity input');

minusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const input = quantityInputs[index];
    if (input.value > 1) {
      input.value--;
    }
  });
});

plusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const input = quantityInputs[index];
    input.value++;
  });
});