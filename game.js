

const bgMusic = new Audio('background.mp3');
bgMusic.loop = true;

document.addEventListener('keydown', () => {
    if (!bgMusic.playing) {
        bgMusic.play();
    }
});

bgMusic.playing = false;
bgMusic.addEventListener('play', () => bgMusic.playing = true);
bgMusic.addEventListener('pause', () => bgMusic.playing = false);
