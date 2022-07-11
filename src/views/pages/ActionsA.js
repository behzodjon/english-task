import { categories } from '../../assets/cards';
import { createCardItems, getCards } from '../../config/CardGenerator';
import { playWord, startGame, rotateCard } from "../../config/Functionalities";

const ActionSetA = {
  loadContent: async () => {
    // console.log("Categories",categories.action_set_a)
    const cardsContent = await getCards(categories.action_set_a);
    console.log('con', cardsContent);
    return createCardItems(cardsContent);
  },

  after_render: async () => {
    playWord();
    rotateCard();
    startGame();
  },
};
export default ActionSetA;
