import { gameModes } from './Modes';

export const getCards = async (cards) => {
  try {
    const cardsData = cards;
    return cardsData;
  } catch (err) {
    throw new Error('Error', err);
  }
};

export function createCardItems(arr) {
  let cardContainer = '';
  for (let i = 0; i < arr.length; i++) {
    if (gameModes.mode === false) {
      cardContainer += `
      <div class="card-container">
          <div class="card">
            <div class="front" style="background-image: url(../../assets${arr[i].image});">
            <div class="card-header">${arr[i].word}</div>
            </div>
            <div class="back" style="background-image: url(../../assets${arr[i].image});">
              <div class="card-header">${arr[i].translation}</div>
            </div>
            <div class="rotate">Rotate</div>
            <audio id="audio-src" class="audioword">
            <source id="audio-source" src="${arr[i].audioSrc}" type="audio/mpeg">
            </audio>
          </div>
          </div>
        </div>
      `;
    } else {
      cardContainer += `
      <div class="card-container">
          <div class="card card-cover">
            <div class="front" style="background-image: url(../../assets${arr[i].image});">
            <div class="card-header none">${arr[i].word}</div>
            </div>
            <div class="back" style="background-image: url(../../assets${arr[i].image});">
              <div class="card-header none">${arr[i].translation}</div>
            </div>
            <div class="rotate none"></div>
            <audio id="audio-src" class="audioword">
            <source id="audio-source" src="${arr[i].audioSrc}" type="audio/mpeg">
            </audio>
          </div>
        </div>
      `;
    }
  }


 
  return cardContainer;
}
