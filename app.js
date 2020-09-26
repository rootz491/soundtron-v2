let songs = [
    'Freak.mp3',
    'Lucky You.mp3',
    'Greatest.mp3',
    'Ringer.mp3'
]


let play = true;
let player = document.getElementById('player');
let source = document.getElementById('source');
var i=0;

//  it will create same amount of cards as there are songs in that list with same name

function createCards(amount) {
    const cardList = document.getElementById('musicList');
    //  loop same no. of times as length of songs list
    for(let i=0; i<amount; i++) {
    //  create a new card
        let newCard = document.createElement('div');
    //  add name of song as text to new card
        newCard.appendChild(document.createTextNode(songs[i]));
    //  add card class
        newCard.classList.add('music_card');
    //  append new card to Cards List
        cardList.appendChild(newCard);
    //  console.log(`${songs[i]} card added`);
    }
}

createCards(songs.length);

const musicCards = document.querySelectorAll('.music_card');
//console.log(musicCards);

//  card event listener 
musicCards.forEach( card => {
    card.value = songs[i++];
    //console.log(i)
    //console.log(card.classList);
    card.addEventListener('click', setsong);
});

//  set song

function setsong(e) {
    //console.log(e.target.value);
    //  remove glow class from all cards
    for (const card of musicCards) 
        card.classList.remove('glow');
    //  setting link to play song
    const song = 'music/' + e.target.value;
    source.src = song;
    //  load and play song
    player.load();
    player.play()
    play = true;    //  confirm song is playing
    //  making selected card glow
    e.target.classList.add('glow');
}



//  source.src = 'music/' + songs[1];
//  player.load();
//
//  player.load();
//  player.play();
//  player.pause();


//  volume button

const volumeSlider = document.getElementById('volumeBar');
volumeSlider.oninput = e => {
    player.volume = e.target.value;
}



//  play pause button   event listener

document.getElementById('control_button').addEventListener('click', () => {
    //console.log('clicked')
    if (player.currentTime !== 0) { 
        if(play) {
            player.pause();
        }
        else {
                player.play();
        }
        play = !play;
    }
    else {
        alert('select a song first');
    }
});


//  updadte progress bar

function updateProgress() {
    if (player.currentTime > 0) {
       // console.log('working')
        const progressBar = document.getElementById("progressBar");
      //  console.log(progressBar);
        progressBar.value = (player.currentTime / player.duration) * 100;
    }
}








