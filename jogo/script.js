const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

function restartGame() {
    location.reload()
}

const jump = () => {
 mario.classList.add('jump')

 setTimeout(() => {
    
    mario.classList.remove('jump')

 }, 500);
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'drive-download-20260209T181456Z-1-001/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
        document.getElementById('gameOver').style.display = 'flex'


    }



}, 10)
document.addEventListener('keydown', jump)