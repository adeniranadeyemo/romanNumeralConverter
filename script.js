const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const form = document.querySelector('form');

function arabicNumToRomanNum(input) {
  const romanMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // Recursive function
  function convert(remainder) {
    if (remainder === 0) {
      return '';
    }

    for (const key in romanMap) {
      const value = romanMap[key];
      if (remainder >= value) {
        return key + convert(remainder - value);
      }
    }
  }

  return convert(input);
}

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

  if (numberInput.value >= 4000) {
    errorStyle();

    output.innerHTML =
      '<h2 class="result-text">Please enter a number less than or equal to 3999</h2>';
    return;
  }

  resetOuput();

  output.innerHTML = `<h2 class="result-text">${arabicNumToRomanNum(
    inputInt
  )}</h2>`;

  numberInput.value = '';
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

function resetOuput() {
  output.style.backgroundColor = '#ffffff37';
  output.style.color = '#fff';
  output.style.border = '3px solid #fff';

  numberInput.value = '';
  numberInput.focus();
}
