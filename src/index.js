import { postData, nameInput, scoreInput } from './modules/postScore.js';
import getScore from './modules/getScoreAPI.js';

const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');
const ulElement = document.querySelector('.render-score');

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  ulElement.innerHTML = '';
  getScore();
});

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  await postData();
  nameInput.value = '';
  scoreInput.value = '';
});
