const players = [0, 0, 0, 0]; // Track positions of 4 players
let currentLevel = 1;
let currentPlayer = 0;
let scores = [0, 0, 0, 0];
const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

// Initialize game
function init() {
    createBoard();
    positionPlayers();
    document.getElementById('dice').addEventListener('click', handleTurn);
    document.getElementById('next-btn').addEventListener('click', closeModal);
}

// Create game board
function createBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    board.className = `board board-level${currentLevel}`;
    
    levels[`level${currentLevel}`].forEach((tile, index) => {
        const tileElement = document.createElement('div');
        tileElement.className = 'tile';
        tileElement.textContent = tile.icon || ' ';
        tileElement.dataset.index = index;
        board.appendChild(tileElement);
    });
}

// Position players at start
function positionPlayers() {
    document.querySelectorAll('.player').forEach((player, index) => {
        const startTile = document.querySelector('.tile:first-child');
        player.style.transform = `translate(
            ${startTile.offsetLeft + 20 + (index * 45)}px,
            ${startTile.offsetTop + 20}px
        )`;
    });
}

// Handle player turn
function handleTurn() {
    if(currentPlayer >= 4) currentPlayer = 0; // Cycle through players
    rollDice(currentPlayer);
}

// Dice roll mechanics
function rollDice(playerIndex) {
    const steps = Math.floor(Math.random() * 3) + 1;
    movePlayer(playerIndex, steps);
}

// Player movement system
function movePlayer(playerIndex, steps) {
    const player = document.getElementById(`player${playerIndex + 1}`);
    const tiles = document.querySelectorAll('.tile');
    
    players[playerIndex] += steps;
    if(players[playerIndex] >= tiles.length) players[playerIndex] = tiles.length - 1;
    
    const targetTile = tiles[players[playerIndex]];
    player.style.transition = 'transform 0.5s';
    player.style.transform = `translate(
        ${targetTile.offsetLeft}px,
        ${targetTile.offsetTop}px
    )`;
    
    setTimeout(() => {
        checkTile(players[playerIndex], playerIndex);
        currentPlayer++;
    }, 500);
}

// Tile interaction system
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

// Quiz handler
function showQuiz(data, playerIndex) {
    const modal = document.getElementById('question-modal');
    document.getElementById('modal-title').textContent = 'Quiz Time!';
    document.getElementById('modal-text').textContent = data.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = data.options.map(option => 
        `<button class="quiz-option" onclick="checkAnswer(${option.correct}, ${playerIndex})">
            ${option.text}
        </button>`
    ).join('');
    
    modal.style.display = 'block';
}

// Challenge handler
function showChallenge(data, playerIndex) {
    const modal = document.getElementById('question-modal');
    document.getElementById('modal-title').textContent = 'Tantangan!';
    document.getElementById('modal-text').textContent = data.task;
    
    // Create input field for text-based challenges
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'challenge-answer';
    
    // Create drag-and-drop for pairing challenges
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
    
    document.getElementById('next-btn').onclick = () => validateChallenge(data, playerIndex);
    modal.style.display = 'block';
}

// Reward handler
function showReward(data, playerIndex) {
    scores[playerIndex] += data.points || 10;
    updateLeaderboard(playerIndex);
    alert(data.content);
}

// Info handler
function showInfo(data) {
    alert(`INFO: ${data.content}\nContoh: ${data.example}`);
}

// Answer validation
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

// Challenge validation
function validateChallenge(data, playerIndex) {
    const answer = document.getElementById('challenge-answer')?.value
        || Array.from(document.querySelectorAll('.pair input'))
            .map(input => input.value);
            
    if(answer.toString() === data.answer.toString()) {
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
    
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    showLeaderboard();
}

// Level completion
function handleLevelCompletion(playerIndex) {
    if(currentLevel < 3) {
        currentLevel++;
        players = [0, 0, 0, 0]; // Reset positions for new level
        createBoard();
        positionPlayers();
    } else {
        alert('Selamat! Kamu menyelesaikan semua level!');
    }
}

// Modal control
function closeModal() {
    document.getElementById('question-modal').style.display = 'none';
}

// Leaderboard display
function showLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = leaderboard.map(entry => 
        `<li style="color: ${entry.color}">${entry.name}: ${entry.score} poin</li>`
    ).join('');
}

init();
