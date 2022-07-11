import { gameModes } from "./Modes";

export function playWord() {
  const container = document.getElementById("page_container");
  container.onclick = function (event) {
    if (event.target.className !== "front") {
      return;
    }
    const card = event.target.closest(".card");
    const el = card.querySelector("#audio-src");
    if (card.classList.contains("card-cover") === false) {
      el.play();
    }
  };
}

export function rotateCard() {
  const rotateBtn = document.querySelectorAll(".rotate");
  rotateBtn.forEach((e) => {
    e.onclick = function (event) {
      if (event.target.className !== "rotate") {
        return;
      }
      const cardContainer = event.target.closest(".card-container");
      const cardElement = cardContainer.querySelector(".card");
      cardElement.classList.toggle("translate");
    };

    const cardRotate = document.querySelectorAll(".back");
    cardRotate.forEach((element) => {
      element.onmouseleave = function (event) {
        const cardContainer = event.target.closest(".card-container");
        const elem = cardContainer.querySelector(".card");
        elem.classList.remove("translate");
      };
    });
  });
}

export function checkTheGameMode() {
  const container = document.getElementById("header_container");
  container.onclick = function btnchck(event) {
    if (event.target.className !== "switch-handle") {
      return;
    }
    const switcher = event.target.closest(".switch");
    const state = switcher.querySelector("#switcher");
    const buttonStart = document.getElementById("btn-start");
    const cards = document.querySelectorAll(".card");
    const cardHeaders = document.querySelectorAll(".card-header");
    const cardRotate = document.querySelectorAll(".rotate");

    if (state.checked === false) {
      state.checked = true;
      gameModes.mode = false;
      gameModes.isStart = false;
      if (buttonStart !== null) {
        buttonStart.classList.toggle("none");
      }
      cardHeaders.forEach((element) => {
        element.classList.toggle("none");
      });
      cards.forEach((element) => {
        element.classList.toggle("card-cover");
      });
      cardRotate.forEach((element) => {
        element.classList.toggle("none");
      });
     
    } else {
      state.checked = false;
      gameModes.mode = true;
      if (buttonStart !== null) {
        buttonStart.classList.toggle("none");
      }
      cardHeaders.forEach((element) => {
        element.classList.toggle("none");
      });
      cards.forEach((element) => {
        element.classList.toggle("card-cover");
      });
      cardRotate.forEach((element) => {
        element.classList.toggle("none");
      });
     
    }
  };
}

function redirect() {
  document.location.href = "/";
}

export function startGame() {
  const startBtn = document.getElementById("btn-start");
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i -= i) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  if (startBtn !== null) {
    startBtn.onclick = function start(event) {
      if (event.target.classList.contains("repeat") === true) {
        gameModes.audio[gameModes.audio.length - 1].play();
      }
      if (event.target.className === "btn") {
        gameModes.isStart = true;
        const page = document.getElementById("page_container");
        const root = document.querySelector("#root");
        const cardsClick = page.querySelectorAll(".card");

        cardsClick.forEach((el) => {
          el.onclick = function cardPlay() {
            const cw = el.querySelector("#audio-source").getAttribute("src");
            if (cw === gameModes.currentWord) {
              const correct = document.querySelector("#audio-correct");
              correct.play();
              el.querySelector(".front").classList.add("inactive");

              gameModes.corrects += 1;
              if (gameModes.audio.length - 1 !== 0) {
                gameModes.audio.pop();
                gameModes.currentWord = gameModes.audio[gameModes.audio.length - 1]
                  .querySelector("#audio-source")
                  .getAttribute("src");
                setTimeout(
                  () => gameModes.audio[gameModes.audio.length - 1].play(),
                  1000
                );
              } else {
                if (gameModes.errors === 0) {
                  const success = document.querySelector("#audio-success");
                  success.play();
                  document
                    .getElementById("app_container")
                    .setAttribute("style", "display:none");
                  const resultContainer = document.createElement("div");
                  const a = document.createElement("a");
                  a.setAttribute("href", "/");
                  a.setAttribute("id", "redirect-link");
                  resultContainer.classList.add("succes-text");
                  resultContainer.innerHTML = "You are hero!!";
                  resultContainer.setAttribute(
                    "style",
                    "text-align:center; font-size:20px; font-weight:400; width:100%; margin-top:110px; color:red"
                  );
                  resultContainer.append(a);
                  root.append(resultContainer);
                  document.body.classList.add("succes");
                  document
                    .getElementById("redirect-link")
                    .addEventListener("click", redirect);
                  setTimeout(
                    () => document.getElementById("redirect-link").click(),
                    3000
                  );
                } else {
                  const failure = document.querySelector("#audio-failure");
                  failure.play();
                  document
                    .getElementById("app_container")
                    .setAttribute("style", "display:none");
                  const resultContainer = document.createElement("div");
                  const a = document.createElement("a");
                  a.setAttribute("href", "/");
                  a.setAttribute("id", "redirect-link");
                  resultContainer.classList.add("errors-text");
                  resultContainer.innerHTML = gameModes.errors.toString().concat(" errors");
                  resultContainer.setAttribute(
                    "style",
                    "text-align:center; font-size:20px; font-weight:400; width:100%; margin-top:110px; color:red"
                  );
                  resultContainer.append(a);
                  root.append(resultContainer);
                  document.body.classList.add("failure");
                  document
                    .getElementById("redirect-link")
                    .addEventListener("click", redirect);
                  setTimeout(
                    () => document.getElementById("redirect-link").click(),
                    3000
                  );
                }
              }
            } else {
              const error = document.querySelector("#audio-error");
              error.play();
              gameModes.errors += 1;
            }
          };
        });
        event.target.classList.add("repeat");
        gameModes.audio = Array.from(document.querySelectorAll(".audioword"));
        gameModes.audio = shuffleArray(gameModes.audio);
        gameModes.currentWord = gameModes.audio[gameModes.audio.length - 1]
          .querySelector("#audio-source")
          .getAttribute("src");
          gameModes.audio[gameModes.audio.length - 1].play();
      }
    };
  }
}
