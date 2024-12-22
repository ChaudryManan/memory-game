document.addEventListener("DOMContentLoaded", () => {
  const Arraycard = [
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];
  let result = document.querySelector("#result");
  let grid = document.querySelector(".grid");
  Arraycard.sort(() => 0.5 - Math.random());

  cardsChosen = [];
  cardsChosenId = [];
  function createcard() {
    for (let i = 0; i < Arraycard.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      grid.appendChild(card);
      card.addEventListener("click", flip);
    }
  }

  let count = 0;
  let countagain = 0;
  function checkmatch() {
    let image = document.querySelectorAll("img");
    let option1 = cardsChosenId[0];
    let option2 = cardsChosenId[1];
    if (option1 == option2) {
      alert("you have clicked the same card");
    } else if (cardsChosen[0] == cardsChosen[1]) {
      alert("you have found the match");
      image[option1].setAttribute("src", "images/white.png");
      image[option2].setAttribute("src", "images/white.png");
      image[option1].removeEventListener("click", flip);
      image[option2].removeEventListener("click", flip);
      countagain++;
      if (countagain == Arraycard.length / 2) {
        alert("you have win");
      }

      result.innerHTML = countagain;
    } else {
      image[option1].setAttribute("src", "images/blank.png");
      image[option2].setAttribute("src", "images/blank.png");
      alert("Sorry, try again");
      count++;
      if (count >= 7) {
        alert("you lose the game");
        document.write("you are just given 7 attemptd");

        for (let i = 0; i < Arraycard.length; i++) {
          image[i].setAttribute("src", "images/white.png");
          image[i].removeEventListener("click", flip);
          result.innerHTML = countagain;
        }
      }
    }
    cardsChosen = [];
    cardsChosenId = [];
  }

  createcard();

  function flip() {
    let cardId = this.getAttribute("data-id");

    if (
      cardsChosenId.includes(cardId) ||
      this.getAttribute("src") !== "images/blank.png"
    ) {
      alert("You have clicked this card already!");
      return;
    }
    cardsChosen.push(Arraycard[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", Arraycard[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkmatch, 500);
    }
  }
});
