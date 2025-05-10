const players = [1, 2, 3, 4];
let currentPlayer = 0;
let currentLevel = 1;
const board = document.getElementById('board');
const dice = document.getElementById('dice');
const modal = document.getElementById('question-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');

// Initialize game
function init() {
    loadLevel(currentLevel);
    positionPlayers();
    dice.addEventListener('click', rollDice);
    nextBtn.addEventListener('click', closeModal);
}

// Load level content
function loadLevel(level) {
    board.innerHTML = '';
    board.className = `board board-level${level}`;
    
    levels[`level${level}`].forEach((tile, index) => {
        const tileElement = document.createElement('div');
        tileElement.className = 'tile';
        tileElement.dataset.type = tile.type;
        tileElement.textContent = tile.icon;
        tileElement.addEventListener('click', () => showTileInfo(tile));
        board.appendChild(tileElement);
    });
}

// Position players at start
function positionPlayers() {
    players.forEach((player, index) => {
        const playerElement = document.getElementById(`player${player}`);
        const startTile = document.querySelector('.tile:first-child');
        playerElement.style.position = 'absolute';
        playerElement.style.top = `${startTile.offsetTop + 10}px`;
        playerElement.style.left = `${startTile.offsetLeft + 10 + (index * 45)}px`;
    });
}

// Dice roll logic
function rollDice() {
    const steps = Math.floor(Math.random() * 3) + 1;
    movePlayer(currentPlayer, steps);
}

// Player movement
function movePlayer(playerIndex, steps) {
    const player = document.getElementById(`player${players[playerIndex]}`);
    const tiles = document.querySelectorAll('.tile');
    let currentPosition = Array.from(tiles).findIndex(tile => 
        tile.offsetLeft === player.offsetLeft - 10 && 
        tile.offsetTop === player.offsetTop - 10
    );

    currentPosition += steps;
    if(currentPosition >= tiles.length) currentPosition = tiles.length - 1;
    
    const targetTile = tiles[currentPosition];
    player.style.transform = `translate(${targetTile.offsetLeft + 10}px, ${targetTile.offsetTop + 10}px)`;
    
    setTimeout(() => {
        checkTile(targetTile);
    }, 500);
}

// Check tile type
function checkTile(tile) {
    const tileType = tile.dataset.type;
    const levelData = levels[`level${currentLevel}`][tile.dataset.index];
    
    if(tileType === 'quiz') {
        showQuiz(levelData);
    } else if(tileType === 'challenge') {
        showChallenge(levelData);
    } else if(tileType === 'reward') {
        showReward(levelData);
    }
}

// Modal functions
function showModal(title, content, options = []) {
    modalTitle.textContent = title;
    modalText.textContent = content;
    optionsContainer.innerHTML = '';
    
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option.text;
        btn.className = 'option-btn';
        btn.addEventListener('click', () => option.handler());
        optionsContainer.appendChild(btn);
    });
    
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

// Level progression
function nextLevel() {
    currentLevel++;
    loadLevel(currentLevel);
    positionPlayers();
}

init();