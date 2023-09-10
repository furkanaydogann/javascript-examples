const music = document.querySelector('audio');
const image = document.querySelector('img');


const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const title = document.getElementById('title');
const creator = document.getElementById('creator');

const progressDiv = document.getElementById('progressDiv');
const progress = document.getElementById('progress');

const currentTimeSpan = document.getElementById('currentTime');
const totalTimeSpan = document.getElementById('totalTime');

let songIndex = 0;


let isPlaying = false;

const songs = [
    {
        name: 'karsu',
        title: 'Karsu - Until, I Do',
        creator: 'Karsu'
    },
    {
        name: 'direct-x',
        title: 'Direct-T - Ama Aşkım Yok',
        creator: 'Direct-T'
    }
];

function loadSong(song) {
    title.textContent = song.title;
    creator.textContent = song.creator;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.png`;
}

loadSong(songs[songIndex]);


function playSong() {
    isPlaying = true;
    playButton.classList.replace('fa-play', 'fa-pause');
    music.play();
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function pauseSong() {
    isPlaying = false;
    playButton.classList.replace('fa-pause', 'fa-play');
    music.pause();
}

function updateProgressBar(e) {
    if (isPlaying) {

        const { currentTime, duration } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);


        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }
        if (durationSeconds) {
            totalTimeSpan.textContent = `${durationMinutes} : ${durationSeconds}`;
        }

        const currentTimeMinutes = Math.floor(currentTime / 60);
        let currentTimeSeconds = Math.floor(currentTime % 60);

        if (currentTimeSeconds < 10) {
            currentTimeSeconds = `0${currentTimeSeconds}`;
        }
        if (currentTimeSeconds) {
            currentTimeSpan.textContent = `${currentTimeMinutes} : ${currentTimeSeconds}`;
        }
        // if(currentTime == duration) {
        //     nextSong();
        // }
    }
}

function setProgressBar(e) {

    const width = e.srcElement.clientWidth;
    const clickX = e.offsetX;
    const { duration } = music;

    // console.log((clickX / width) * duration);
    music.currentTime = (clickX / width) * duration;
}




playButton.addEventListener('click', () => isPlaying ? pauseSong() : playSong());



prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressDiv.addEventListener('click', setProgressBar);
music.addEventListener('ended', nextSong);
