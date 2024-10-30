document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const mostListenedList = document.getElementById('most-listened-list');
    const songDuration = document.getElementById('song-duration');

    let songs = JSON.parse(localStorage.getItem('songs')) || [];
    let currentSongIndex = 0;

    function loadSong(song) {
        document.querySelector('.title').textContent = song.title;
        document.querySelector('.artist').textContent = song.artist;
        document.querySelector('.cover').src = song.cover;
        songDuration.textContent = song.duration;
        currentSongIndex = songs.indexOf(song);
    }

    function playSong(song) {
        window.open(song.youtube, '_blank');
        playButton.textContent = 'Pause';
    }

    function pauseSong() {
        playButton.textContent = 'Play';
    }

    playButton.addEventListener('click', () => {
        if (playButton.textContent === 'Play') {
            playSong(songs[currentSongIndex]);
        } else {
            pauseSong();
        }
    });

    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(songs[currentSongIndex]);
    });

    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
    });

    function displaySongs() {
        mostListenedList.innerHTML = '';
        songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${song.cover}" alt="${song.title}">
                <div>
                    <h4>${song.title}</h4>
                    <p>${song.artist}</p>
                    <p>${song.genre}</p> <!-- Mostra o gênero -->
                </div>
                <button class="play" data-index="${index}">Play</button>
                <button class="remove" data-index="${index}">Remover</button>
            `;
            mostListenedList.appendChild(li);
        });

        const playButtons = document.querySelectorAll('.play');
        playButtons.forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                loadSong(songs[index]);
                playSong(songs[index]);
            });
        });

        const removeButtons = document.querySelectorAll('.remove');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                removeSong(index);
            });
        });
    }

    function removeSong(index) {
        songs.splice(index, 1);
        localStorage.setItem('songs', JSON.stringify(songs));
        displaySongs();
    }

    function addSong(song) {
        songs.push(song);
        localStorage.setItem('songs', JSON.stringify(songs));
        displaySongs();
    }

    document.getElementById('addSongForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const title = document.getElementById('title').value;
        const artist = document.getElementById('artist').value;
        const genre = document.getElementById('genre').value;
        const duration = document.getElementById('duration').value;
        const cover = document.getElementById('cover').value;
        const youtube = document.getElementById('youtube').value;

        if (!title || !artist || !genre || !duration || !cover || !youtube) {
            console.error('Todos os campos devem ser preenchidos!');
            return;
        }

        const newSong = {
            title: title,
            artist: artist,
            genre: genre,
            duration: duration,
            cover: cover,
            youtube: youtube
        };

        addSong(newSong);
        document.getElementById('addSongForm').reset();
    });

    displaySongs();
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    }
});
