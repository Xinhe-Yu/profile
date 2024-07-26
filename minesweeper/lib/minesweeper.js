
const tableElement = document.getElementById("minesweeper");
const emojiElement = document.getElementById("emoji");
let gameTurn = true;
let correctFlags = 0;

emojiElement.innerText = "🙂";
const jsConfetti = new JSConfetti();
const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]];
const classList = ['opened', 'mine-neighbour-1', 'mine-neighbour-2', 'mine-neighbour-3', 'mine-neighbour-4', 'mine-neighbour-5', 'mine-neighbour-6', 'mine-neighbour-7', 'mine-neighbour-8', 'mine'];

const generateTable = () => {
  let table = "";
  for (let i = 0; i < 10; i += 1) {
    table += "<tr>";
    for (let j = 0; j < 10; j += 1) { table += '<td class="unopened"></td>'; }
    table += "</tr>";
  } tableElement.innerHTML = table;
};

const generateRandomCoordinate = () => {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  return [x, y];
};

const generateUniqueCoordinates = () => {
  const coordinates = new Set();
  while (coordinates.size < 10) {
    const coord = generateRandomCoordinate();
    coordinates.add(JSON.stringify(coord));
  }
  return Array.from(coordinates).map(coord => JSON.parse(coord));
};

const isValidCoord = (x, y) => {
  return x >= 0 && x < 10 && y >= 0 && y < 10;
};

const generatemap = () => {
  const array = Array.from({ length: 10 }, () => Array(10).fill(0));
  const mineList = generateUniqueCoordinates();
  mineList.forEach((minCoord) => {
    const [x, y] = [minCoord[0], minCoord[1]];
    array[y][x] = "*";
    directions.forEach(([dx, dy]) => {
      const [newX, newY] = [x + dx, y + dy];
      if (isValidCoord(newX, newY) && typeof array[newY][newX] === 'number') {
        array[newY][newX] += 1;
      }
    });
  });
  console.log(array);
  return array;
};

const initialize = () => {
  generateTable();
  return generatemap();
};

let array = initialize();

const unopened = (element) => {
  return element.classList.contains("unopened");
};
const flagged = (element) => {
  return element.classList.contains("flagged");
};
const whichElement = (x, y) => {
  return tableElement.querySelectorAll("td")[y * 10 + x];
};
const whichCoord = (element) => {
  return [element.cellIndex, element.parentElement.rowIndex];
};

const win = () => {
  console.log(correctFlags);
  if (!document.querySelector(".unopened") && correctFlags === 10) {
    emojiElement.innerText = "😎";
    gameTurn = false;
  }
};

const reveal = (x, y) => {
  const element = whichElement(x, y);
  if (unopened(element)) {
    element.classList.remove('unopened');
    element.classList.add(classList[array[y][x]]);
    if (array[y][x] === 0) {
      directions.forEach(([dx, dy]) => {
        const [newX, newY] = [x + dx, y + dy];
        if (isValidCoord(newX, newY) && unopened(whichElement(newX, newY))) {
          reveal(newX, newY);
        }
      });
    }
  }
};

emojiElement.addEventListener('click', () => {
  if (emojiElement.innerText === "😣" || emojiElement.innerText === "😎") {
    gameTurn = true;
    emojiElement.innerText = "🙂";
    generateTable();
    array = generatemap();
    correctFlags = 0;
  }
});

tableElement.addEventListener("click", (event) => {
  if (gameTurn && event.target.tagName === "TD" && unopened(event.target)) {
    const [x, y] = whichCoord(event.target);
    if (typeof array[y][x] === 'number') {
      reveal(x, y);
    } else if (array[y][x] === '*') {
      event.target.classList.remove('unopened');
      event.target.classList.add(classList[9]);
      emojiElement.innerText = "😣";
      gameTurn = false;
    }

    win();
  }
});

tableElement.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  if (gameTurn && event.target.tagName === "TD" && (unopened(event.target) || flagged(event.target))) {
    event.target.classList.toggle('unopened');
    event.target.classList.toggle('flagged');
    const [x, y] = whichCoord(event.target);
    correctFlags += (flagged(event.target) ? 1 : -1) * (array[y][x] === "*" ? 1 : -1);
    win();
  }
});
