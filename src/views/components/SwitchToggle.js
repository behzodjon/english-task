import { checkTheGameMode } from "../../config/Functionalities";
import { gameModes } from "../../config/Modes";

const SwitchToggle = {
  render: async () => {
    let view = "";
 
    if (gameModes.mode === false) {
      view += `
              </ul>
              </div>
            </nav>
            <div class="switch-container">
              <label for="" class="switch">
                <input id="switcher" type="checkbox" class="switch-input" checked>
                <span class="switch-label" data-on="Train" data-off="Play"></span>
                <span class="switch-handle"></span>
              </label>
            </div>
          `;
    } else {
      view +=  `
              </ul>
              </div>
            </nav>
            <div class="switch-container">
              <label for="" class="switch">
                <input id="switcher" type="checkbox" class="switch-input">
                <span class="switch-label" data-on="Train" data-off="Play"></span>
                <span class="switch-handle"></span>
              </label>
            </div>
          `;
    }

    if (gameModes.mode === false) {
        view +=  `
          <div class="btns">
            <button id="btn-start" class="btn none">Start</button>
          </div>
          <audio id="audio-correct" class="soundEffects">
            <source src="../../assets/audio/correct.mp3" type="audio/mpeg">
          </audio>
          <audio id="audio-error" class="soundEffects">
            <source src="../../assets/audio/error.mp3" type="audio/mpeg">
          </audio>
          <audio id="audio-success" class="soundEffects">
            <source src="../../assets/audio/success.mp3" type="audio/mpeg">
          </audio>
          <audio id="audio-failure" class="soundEffects">
            <source src="../../assets/audio/failure.mp3" type="audio/mpeg">
          </audio>
          `;
      } else {
        view +=  `
        <div class="btns">
          <button id="btn-start" class="btn">Start</button>
        </div>
        <audio id="audio-correct" class="soundEffects">
          <source src="../../assets/audio/correct.mp3" type="audio/mpeg">
        </audio>
        <audio id="audio-error" class="soundEffects">
          <source src="../../assets/audio/error.mp3" type="audio/mpeg">
        </audio>
        <audio id="audio-success" class="soundEffects">
          <source src="../../assets/audio/success.mp3" type="audio/mpeg">
        </audio>
        <audio id="audio-failure" class="soundEffects">
          <source src="../../assets/audio/failure.mp3" type="audio/mpeg">
        </audio>
        `;
      }
    
    return view;
  },
  after_render: async () => {
    checkTheGameMode();
  },
};

export default SwitchToggle;
