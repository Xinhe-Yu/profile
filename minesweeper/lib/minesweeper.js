const tableElement = document.getElementById("minesweeper");
const emojiElement = document.getElementById("emoji");

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

const isValidCoord = (x, y) => { return x >= 0 && x < 10 && y >= 0 && y < 10; };

const generatemap = () => {
  const array = Array.from({ length: 10 }, () => Array(10).fill(0));
  const mineList = generateUniqueCoordinates();
  mineList.forEach((minCoord) => {
    const [x, y] = [minCoord[0], minCoord[1]];
    array[y][x] = "*";
    directions.forEach(([dx, dy]) => {
      const [newX, newY] = [x + dx, y + dy];
      if (isValidCoord(newX, newY) && typeof array[newY][newX] === 'number') { array[newY][newX] += 1; }
    });
  });
  console.log(array);
  return array;
};

const initialize = () => {
  emojiElement.innerText = "🙂";
  generateTable();
  return [generatemap(), true, 0];
};

let [array, gameTurn, correctFlags] = initialize();
let [started, victory] = [false, 0];
let startTime, timeElapsed, bestTime;

const unopened = (element) => { return element.classList.contains("unopened"); };
const flagged = (element) => { return element.classList.contains("flagged"); };
const whichElement = (x, y) => { return tableElement.querySelectorAll("td")[y * 10 + x]; };
const whichCoord = (element) => { return [element.cellIndex, element.parentElement.rowIndex]; };
const timeElement = document.getElementById('time');
const victoryElement = document.getElementById('win');
const resultElement = document.getElementById('result');
const bestElement = document.getElementById('best');

const formatMilliseconds = (ms) => {
  const milliseconds = (ms % 1000).toString().padStart(3, '0');
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return minutes + ":" + seconds + "," + milliseconds;
}

const win = () => {
  if (!document.querySelector(".unopened") && correctFlags === 10) {
    emojiElement.innerText = "😎";
    gameTurn = started = false;
    timeElapsed = new Date() - startTime;
    victory += 1;
    timeElement.innerText = formatMilliseconds(timeElapsed);
    if (!bestTime || bestTime > timeElapsed) {
      bestTime = timeElapsed;
      bestElement.innerText = timeElement.innerText;
    }
    victoryElement.innerText = victory;
    if (resultElement.style.display === "") {
      resultElement.style.display = "grid";
    }
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
        if (isValidCoord(newX, newY) && unopened(whichElement(newX, newY))) { reveal(newX, newY); }
      });
    }
  }
};

emojiElement.addEventListener('click', () => {
  if (emojiElement.innerText === "😣" || emojiElement.innerText === "😎") {
    emojiElement.innerText = "🙂";
    [array, gameTurn, correctFlags] = initialize();
  }
});

const handleLeftClick = (event) => {
  if (!started) { started = true; startTime = new Date() }
  if (gameTurn && event.target.tagName === "TD" && unopened(event.target)) {
    const [x, y] = whichCoord(event.target);
    if (typeof array[y][x] === 'number') {
      reveal(x, y);
    } else if (array[y][x] === '*') {
      event.target.classList.remove('unopened');
      event.target.classList.add(classList[9]);
      emojiElement.innerText = "😣";
      gameTurn = started = false;
      timeElapsed = startTime - new Date();
    }
    win();
  }
};

const handleRightClick = (event) => {
  if (!started) { started = true; startTime = new Date() }
  if (gameTurn && event.target.tagName === "TD" && (unopened(event.target) || flagged(event.target))) {
    event.target.classList.toggle('unopened');
    event.target.classList.toggle('flagged');
    const [x, y] = whichCoord(event.target);
    correctFlags += (flagged(event.target) ? 1 : -1) * (array[y][x] === "*" ? 1 : -1);
    win();
  }
};

tableElement.addEventListener("mouseup", (event) => {
  if (event.button === 0) {
    handleLeftClick(event);
  } else if (event.button === 2) {
    handleRightClick(event);
  }
});

tableElement.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

let pressTimer;
tableElement.addEventListener('touchstart', (event) => {
  event.preventDefault();
  pressTimer = setTimeout(() => { handleRightClick(event); }, 400);
});

tableElement.addEventListener('touchend', (event) => {
  clearTimeout(pressTimer);
  handleLeftClick(event);
});
