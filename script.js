const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const form = document.querySelector('form');

function checkUserInput() {
  const inputInt = parseInt(numberInput.value);

  output.style.display = 'block';

  if (!numberInput.value || isNaN(inputInt)) {
    errorStyle();

    output.innerHTML =
      '<h2 class="result-text">Please enter a valid number</h2>';
    return;
  }

  if (numberInput.value <= 0) {
    errorStyle();

    output.innerHTML =
      '<h2 class="result-text">Please enter a number greater than or equal to 1</h2>';
    return;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkUserInput();
});

function errorStyle() {
  output.style.backgroundColor = 'lightpink';
  output.style.color = '#a01414';
  output.style.border = '5px solid #a01414';

  numberInput.value = '';
  numberInput.focus();
}
