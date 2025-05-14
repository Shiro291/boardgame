const currentLevel = 1;
const board = document.getElementById('board');
const dice = document.getElementById('dice');
const players = [0, 0, 0, 0];
let currentPlayer = 0;
const scores = [0, 0, 0, 0];
const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', closeModal);


function updateLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';

    players.forEach((_, playerIndex) => {
        const playerName = `Pemain ${playerIndex + 1}`;
        const playerScore = scores[playerIndex];

        // Tambahkan pemain ke leaderboard
        const listItem = document.createElement('li');
        listItem.textContent = `${playerName}: ${playerScore} poin`;

        leaderboardList.appendChild(listItem);
    });
}

// Fungsi untuk menampilkan modal
function showModal(title, text, options = []) {
    const modal = document.getElementById('question-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const optionsContainer = document.getElementById('options-container');

    modalTitle.textContent = title;
    modalText.innerHTML = text; 

    optionsContainer.innerHTML = options
        .map(option => `<button class="quiz-option bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition" onclick="${option.action}">${option.text}</button>`)
        .join('');

    modal.classList.remove('hidden');
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('question-modal');
    modal.classList.add('hidden');
    document.getElementById('options-container').innerHTML = '';
}

// Tambahkan logika untuk menangani tile
function checkTile(tileIndex, playerIndex) {
    const currentLevelData = levels[`level${currentLevel}`][tileIndex];

    switch (currentLevelData.type) {
        case 'quiz':
            showModal('Quiz Time!', currentLevelData.question, currentLevelData.options.map(option => ({
                text: option.text,
                action: `checkAnswer(${option.correct}, ${playerIndex})`
            })));
            break;
        case 'challenge':
            showModal('Challenge!', currentLevelData.task, [
                { text: 'Submit', action: `validateChallenge(${playerIndex})` }
            ]);
            break;
        case 'info':
            // Combine content and example for the info modal
            const infoContent = `
                <p>${currentLevelData.content}</p>
                ${currentLevelData.example ? `<p class="mt-2 text-sm text-gray-500">Contoh: ${currentLevelData.example}</p>` : ''}
            `;
            showModal('Info', infoContent, []);
            break;
        case 'reward':
            scores[playerIndex] += 10; // Tambahkan skor
            updateLeaderboard();
            break;
        case 'finish':
            alert(`Player ${playerIndex + 1} wins the level!`);
            break;
    }
}

// Fungsi untuk memvalidasi jawaban quiz
function checkAnswer(isCorrect, playerIndex) {
    if (isCorrect) {
        scores[playerIndex] += 10; // Tambahkan skor
        updateLeaderboard();
        closeModal();
    } else {
        alert('Jawaban salah! Coba lagi!');
    }
}

// Fungsi untuk memvalidasi tantangan
function validateChallenge(playerIndex) {
    const userAnswer = document.getElementById('challenge-answer').value;
    if (userAnswer === 'correct') { // Ganti dengan logika validasi Anda
        scores[playerIndex] += 20; // Tambahkan skor
        leaderboard.push({ name: `Player ${playerIndex + 1}`, score: scores[playerIndex] });
        updateLeaderboard();
        closeModal();
    } else {
        players[playerIndex] -= 1;
        alert('Jawaban salah! Coba lagi!');
    }
}


async function rollDice() {
    const steps = Math.floor(Math.random() * 3) + 1;
    movePlayer(currentPlayer, steps);

    const maxTileIndex = levels[`level${currentLevel}`].length - 1;
    if (players[currentPlayer] === maxTileIndex) {
        alert(`Player ${currentPlayer + 1} wins!`);
    }

    currentPlayer = (currentPlayer + 1) % players.length;
    updateCurrentPlayer();
}

function updateCurrentPlayer() {
    const currentPlayerElement = document.getElementById('current-player');

    const maxTileIndex = levels[`level${currentLevel}`].length - 1;
    if (players[currentPlayer] === maxTileIndex) {
        currentPlayer = (currentPlayer + 1) % players.length;
        updateCurrentPlayer();
    }

    currentPlayerElement.textContent = `Giliran: Player ${currentPlayer + 1}`;
}

async function movePlayer(playerIndex, steps) {
    players[playerIndex] += steps;
    const maxTileIndex = levels[`level${currentLevel}`].length;

    if (players[playerIndex] > maxTileIndex) {
        players[playerIndex] = maxTileIndex;
    }

    await updateBoard();
    checkTile(players[playerIndex], playerIndex);
}

async function updateBoard() {
    const currentLevelData = levels[`level${currentLevel}`];
    board.innerHTML = '';

    currentLevelData.forEach((tile, index) => {
        const tileElement = document.createElement('div');
        tileElement.className = `tile-${index + 1} flex items-center justify-center text-center p-4 rounded-lg`;
        tileElement.dataset.type = tile.type;
        tileElement.innerHTML = `
            <div>
                <div class="text-2xl">${tile.icon || ''}</div>
            </div>
        `;

        switch (tile.type) {
            case 'start':
                tileElement.classList.add('bg-green-200', 'border', 'border-green-500');
                break;
            case 'info':
                tileElement.classList.add('bg-blue-200', 'border', 'border-blue-500');
                break;
            case 'quiz':
                tileElement.classList.add('bg-yellow-200', 'border', 'border-yellow-500');
                break;
            case 'challenge':
                tileElement.classList.add('bg-orange-200', 'border', 'border-orange-500');
                break;
            case 'reward':
                tileElement.classList.add('bg-purple-200', 'border', 'border-purple-500');
                break;
            case 'finish':
                tileElement.classList.add('bg-red-200', 'border', 'border-red-500');
                break;
        }

        players.forEach((playerPosition, playerIndex) => {
            if (playerPosition === index) {
                const playerElement = document.createElement('div');
                playerElement.className = `player player-${playerIndex + 1} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold`;

                const playerColors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];
                playerElement.classList.add(playerColors[playerIndex % playerColors.length]);

                playerElement.textContent = playerIndex + 1;

                tileElement.appendChild(playerElement);
            }
        });

        board.appendChild(tileElement);
    });
}

function saveLeaderboard() {
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

dice.addEventListener('click', rollDice);

updateBoard();
updateLeaderboard();
