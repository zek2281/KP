document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const sidebar = document.getElementById('sidebar');
    const closeOverlay = document.getElementById('close-overlay');
    const loginOverlay = document.getElementById('login-overlay');
    const loginButton = document.getElementById('login-button');
    const adminSection = document.getElementById('admin-section');
    const pagesList = document.getElementById('pages-list');
    const gameList = document.getElementById('game-list');
    const addGameForm = document.getElementById('add-game-form');
    const gameNameInput = document.getElementById('game-name');
    const gameLinkInput = document.getElementById('game-link');

    let isAdmin = false;

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        closeOverlay.classList.toggle('active');
    }

    burgerMenu.addEventListener('click', toggleSidebar);
    closeOverlay.addEventListener('click', toggleSidebar);

    const pages = [
        { name: 'Home', link: '#' },
        { name: 'Game', link: '#' },
        { name: 'Application', link: '#' },
        { name: 'Telegram', link: 'https://t.me/download_AppLibrary' },
        { name: 'Top 10 Games', link: '#' },
        { name: 'Top 100 Offline Games', link: '#' }
    ];

    if (pages.length) {
        pages.forEach(page => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = page.link;
            a.textContent = page.name;
            li.appendChild(a);
            pagesList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No pages available';
        pagesList.appendChild(li);
    }

    function loadGames() {
        // This is where you'd load games dynamically from a server or local storage
        const games = [
            { name: 'Game 1', link: '#' },
            { name: 'Game 2', link: '#' }
            // Add more games here
        ];

        gameList.innerHTML = '';
        games.forEach(game => {
            const div = document.createElement('div');
            div.className = 'game-item';
            const a = document.createElement('a');
            a.href = game.link;
            a.textContent = game.name;
            div.appendChild(a);
            gameList.appendChild(div);
        });
    }

    loadGames();

    function showLoginOverlay() {
        loginOverlay.style.display = 'flex';
    }

    function hideLoginOverlay() {
        loginOverlay.style.display = 'none';
    }

    loginButton.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple admin check (should be replaced with real authentication)
        if (username === 'admin' && password === 'password') {
            isAdmin = true;
            hideLoginOverlay();
            adminSection.classList.remove('hidden');
        } else {
            alert('Invalid credentials');
        }
    });

    addGameForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!isAdmin) {
            alert('You must be logged in to add games.');
            return;
        }

        const gameName = gameNameInput.value;
        const gameLink = gameLinkInput.value;

        // Here you'd normally send the new game data to the server
        const div = document.createElement('div');
        div.className = 'game-item';
        const a = document.createElement('a');
        a.href = gameLink;
        a.textContent = gameName;
        div.appendChild(a);
        gameList.appendChild(div);

        gameNameInput.value = '';
        gameLinkInput.value = '';
    });

    // Show login overlay on page load
    showLoginOverlay();
});
