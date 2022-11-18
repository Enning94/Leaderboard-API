import { apiUrl } from './postScore.js';

const ulElement = document.querySelector('.render-score');

const getScore = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const scoreBoard = data.result;
  scoreBoard.sort((a, b) => b.score - a.score);

  scoreBoard.forEach((scoreLine) => {
    const { user, score } = scoreLine;
    const liElement = document.createElement('li');
    liElement.innerHTML = `<span>${user}</span><span>:${score}</span>`;
    ulElement.append(liElement);
  });
};
export default getScore;
