const data = {
    eminem: {
        songs: [
            'Freak.mp3',
            'Lucky You.mp3',
            'Greatest.mp3',
            'Ringer.mp3'
        ],
        image: 'artist/em.jpg'
    },
    edSheeran: {
        songs: [
            'Ringer.mp3'
        ],
        image: 'artist/ed.png'
    },
    logic: {
        songs: [
            'Greatest.mp3'
        ],
        image: 'artist/logic.jpg'
    },
    lilDicky: {
        songs: [
            'Lucky You.mp3'
        ],
        image: 'artist/dicky.jpg'
    },
    juiceWrld: {
        songs: [
            'Lucky You.mp3'
        ],
        image: 'artist/JW.jpg'
    }
}

const artist = Object.keys(data);

var isDown = false;
let play = true;
let player = document.getElementById('player');
let source = document.getElementById('source');
let container = document.querySelector('.listSongs');
var i=0;

//  it will create same amount of cards as there are songs in that list with same name

function createCards(amount) {
    const cardList = document.getElementById('musicList');
    //  loop same no. of times as length of songs list
    for(let i=0; i<amount; i++) {
    //  create a new card
        let newCard = document.createElement('div');

        let description = document.createElement('div');
        description.appendChild(document.createTextNode(artist[i]));
        description.classList.add('description');
    //  add name of song to new card through description
        newCard.appendChild(description);
    //  add card class
        newCard.classList.add('music_card');
    //  console.log(`${data[artist[i]]['image']}`);
        newCard.style.backgroundImage = `url('${data[artist[i]]['image']}')`;
    //  append new card to Cards List
        cardList.appendChild(newCard);
    //  console.log(`${songs[i]} card added`);
    }
}

//  createCards(songs.length);
createCards(Object.keys(data).length);

const musicCards = document.querySelectorAll('.music_card');
//console.log(musicCards);

//  card event listener 
musicCards.forEach( card => {
    card.value = artist[i++];
    //console.log(i)
    //console.log(card.classList);
    card.addEventListener('click', showList);
});

//  show list function

function showList(e) {
    //  remove glow class from all cards
    for (const card of musicCards) 
        card.classList.remove('glow');

    //  making selected card glow
    e.target.classList.add('glow');

    setTimeout( () => {
        container.classList.add('down');
    }, 500);
    //console.log(data[e.target.value]['songs'])
    for(let item of data[e.target.value]['songs']) {
        let song = document.createElement('h1');
        song.appendChild(document.createTextNode(item));
        song.classList.add('song');
        container.appendChild(song);
    }
    listenMusic();  
    //isDown = true;
}

//  add listener to music headers in musicList
function listenMusic() {
    let music = document.getElementsByClassName('song');
   //console.log(music);
    
    for(let item of music) {
        item.value = item.innerHTML;
        item.addEventListener('click', setsong);
    }
    listenCloseMusic();
}

//  add listener to close 'music list' button

function listenCloseMusic() {
    document.getElementById('closeButton').onclick = () => {
        container.classList.remove('down');
        //  remove glow class from all cards
        for (const card of musicCards) 
            card.classList.remove('glow');
    }
}

//  set song

function setsong(e) {
    console.log(e.target.value);
    ///*
        //  setting link to play song
    const song = 'music/' + e.target.value;
    source.src = song;
    //  load and play song
    player.load();
    player.play();
    play = true;    //  confirm song is playing
    //*/    
    //  remove down class
    container.classList.remove('down');
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








