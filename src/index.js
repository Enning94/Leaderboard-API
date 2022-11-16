const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const submitBtn = document.querySelector('.submit-btn');
const ulElement = document.querySelector('.render-score');

const renderInput = () => {
  const myName = nameInput.value;
  const myScore = scoreInput.value;
  const liElement = document.createElement('li');
  liElement.innerHTML = `<span>${myName}</span>:<span>${myScore}`;
  ulElement.append(liElement);
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  renderInput();
});