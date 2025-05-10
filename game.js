// Game state
let currentLevel = 1;
let currentPlayer = 0;
let scores = [0, 0, 0, 0];
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

// DOM elements
const board = document.getElementById('board');
const modal = document.getElementById('question-modal');
const nextBtn = document.getElementById('next-btn');

// Initialize game
function init() {
    createBoard();
    positionPlayers();
    document.getElementById('dice').addEventListener('click', handleTurn);
    nextBtn.addEventListener('click', closeModal);
}

// Create game board
function createBoard() {
    board.innerHTML = '';
    board.className = `board board-level${currentLevel}`;
    
    levels[`level${currentLevel}`].forEach((tile, index) => {
        const tileElement = document.createElement('div');
        tileElement.className = 'tile';
        tileElement.textContent = tile.icon || '';
        tileElement.dataset.index = index;
        tileElement.style.backgroundImage = `url(assets/energy-icons/${tile.icon}.png)`;
        board.appendChild(tileElement);
    });
}

// Position players
function positionPlayers() {
    document.querySelectorAll('.player').forEach((player, index) => {
        const startTile = document.querySelector('.tile:first-child');
        player.style.transform = `translate(
            ${startTile.offsetLeft + 20 + (index * 45)}px,
            ${startTile.offsetTop + 20}px
        )`;
    });
}

// Game mechanics
function handleTurn() {
    const currentPlayerIndex = currentPlayer % 4;
    rollDice(currentPlayerIndex);
    currentPlayer++;
}

function rollDice(playerIndex) {
    const steps = Math.floor(Math.random() * 3) + 1;
    movePlayer(playerIndex, steps);
}

function movePlayer(playerIndex, steps) {
    const player = document.getElementById(`player${playerIndex + 1}`);
    const tiles = document.querySelectorAll('.tile');
    let playerPosition = players[playerIndex];
    
    playerPosition += steps;
    if(playerPosition >= tiles.length) playerPosition = tiles.length - 1;
    players[playerIndex] = playerPosition;
    
    // Animation
    player.style.transition = 'transform 0.5s';
    const targetTile = tiles[playerPosition];
    player.style.transform = `translate(
        ${targetTile.offsetLeft + 20}px,
        ${targetTile.offsetTop + 20}px
    )`;
    
    setTimeout(() => checkTile(playerPosition, currentPlayer % 4), 500);
}

// Interaction handlers
function checkTile(tileIndex, playerIndex) {
    const levelData = levels[`level${currentLevel}`][tileIndex];
    
    switch(levelData.type) {
        case 'quiz':
            showQuiz(levelData, playerIndex);
            break;
        case 'challenge':
            showChallenge(levelData, playerIndex);
            break;
        case 'reward':
            showReward(levelData, playerIndex);
            break;
        case 'info':
            showInfo(levelData);
            break;
        case 'finish':
            handleLevelCompletion(playerIndex);
            break;
    }
}

// Quiz system
function showQuiz(data, playerIndex) {
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const optionsContainer = document.getElementById('options-container');
    
    modalTitle.textContent = 'Quiz Time!';
    modalText.textContent = data.question;
    
    if(data.options) {
        optionsContainer.innerHTML = data.options.map(option => 
            `<button class="quiz-option" onclick="checkAnswer(${option.correct}, ${playerIndex})">
                ${option.text}
            </button>`
        ).join('');
    }
    
    modal.style.display = 'block';
}

function checkAnswer(isCorrect, playerIndex) {
    if(isCorrect) {
        scores[playerIndex] += 10;
        updateLeaderboard(playerIndex);
        closeModal();
    } else {
        alert('Jawaban salah! Coba lagi!');
        players[playerIndex] -= 1; // Move back on wrong answer
    }
}

// Challenge system
function showChallenge(data, playerIndex) {
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    
    modalTitle.textContent = 'Tantangan!';
    modalText.textContent = data.task;
    
    // Create input field for text-based challenges
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'challenge-answer';
    
    // Drag-and-drop for pairing challenges
    if(data.pairs) {
        const container = document.createElement('div');
        data.pairs.forEach(pair => {
            container.innerHTML += `
                <div class="pair">
                    <span>${pair.form || pair.tool}</span>
                    <input type="text" placeholder="Jawaban...">
                </div>
            `;
        });
        document.getElementById('options-container').appendChild(container);
    } else {
        document.getElementById('options-container').appendChild(input);
    }
}

function validateChallenge(data, playerIndex) {
    const userAnswer = document.getElementById('challenge-answer')?.value
        || Array.from(document.querySelectorAll('.pair input'))
            .map(input => input.value);
    
    if(userAnswer.toString() === data.answer.toString()) {
        scores[playerIndex] += 20;
        updateLeaderboard(playerIndex);
        closeModal();
    } else {
        alert('Jawaban belum tepat! Perhatikan petunjuk!');
        players[playerIndex] -= 1;
    }
}

// Leaderboard system
function updateLeaderboard(playerIndex) {
    const player = document.getElementById(`player${playerIndex + 1}`);
    const playerColor = window.getComputedStyle(player).backgroundColor;
    
    leaderboard.push({
        name: `Pemain ${playerIndex + 1}`,
        score: scores[playerIndex],
        color: playerColor
    });
    
    // Update visual leaderboard
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = leaderboard.map(entry => 
        `<li style="color: ${entry.color}">${entry.name}: ${entry.score} poin</li>`
    ).join('');
    
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// Modal control
function closeModal() {
    modal.style.display = 'none';
    document.getElementById('options-container').innerHTML = '';
}

// Level progression
function handleLevelCompletion(playerIndex) {
    if(currentLevel < 3) {
        currentLevel++;
        players = [0, 0, 0, 0]; // Reset player positions
        createBoard();
        positionPlayers();
        closeModal();
    } else {
        alert('Selamat! Kamu menyelesaikan semua level!');
    }
}

init();
