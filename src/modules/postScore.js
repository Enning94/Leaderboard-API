export const nameInput = document.querySelector('.name-input');
export const scoreInput = document.querySelector('.score-input');
export const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${process.env.API_KEY}/scores/`;

export const postData = async () => {
  await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),
    headers: { 'Content-Type': 'application/json' },
  });
};