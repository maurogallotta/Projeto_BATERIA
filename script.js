document.body.addEventListener('keyup',(event)=>{
    playSound(event.code.toLowerCase() );
});
// para ler a sequencia que foi digitada
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    // captura os valores digitados do som e insere em um array
    if(song != '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);    
    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}
function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;// tempo de espaço entre as notas tocadas na sequencia escrita
    }
}

//     video projeto 1 até tempo: 26:21