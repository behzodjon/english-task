import { items } from '../../assets/cards';
import { gameModes } from "../../config/Modes";
import { checkTheGameMode } from "../../config/Functionalities";

 const getCategoriesTitles = async () => {
  try {
    const categoriesTitles = items.title;
    return categoriesTitles;
  } catch (err) {
    throw new Error('Error..', err);
  }
};

const getCategoriesImages = async () => {
  try {
    const categoriesImages = items.image;
    // console.log(categoriesImages);
    return categoriesImages;
  } catch (err) {
    throw new Error('Error..', err);
  }
};

 const getCategoriesUrls = async () => {
  try {
    const urls = items.link;
    return urls;
  } catch (err) {
    throw new Error('Err', err);
  }
};

const Main = {
  loadContent: async () => {
    const cardTitles = await getCategoriesTitles();
    const cardImages = await getCategoriesImages();
    const cardUrls = await getCategoriesUrls();
    const cardAmount = cardTitles.length;

    let view = '';

    for (let i = 0; i < cardAmount; i += 1) {
      if (gameModes.mode === false) {
        view +=`
        <a href=${`/#${cardUrls[i]}`} class="main-card pink">
        <img src=${`./assets${cardImages[i]}`} >
        <p>${cardTitles[i]}</p>
        </a>
        `;
      } else{
        view +=  `
        <a href=${`/#${cardUrls[i]}`} class="main-card">
        <img src=${`./assets${cardUrls[i]}`} alt="" srcset="">
        ${cardUrls[i]}
        </a>
        `;
      }
   
    }
    return view;
  },
  after_render: async () => {
    checkTheGameMode();
  },
};

export default Main;
