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
            'river.mp3'
        ],
        image: 'artist/ed.png'
    },
    logic: {
        songs: [
            'homoside.mp3'
        ],
        image: 'artist/logic.jpg'
    },
    lilDicky: {
        songs: [],
        image: 'artist/dicky.jpg'
    },
    juiceWrld: {
        songs: [],
        image: 'artist/JW.jpg'
    }
}

//console.log(data);

/*          one way to access items

console.log(data['eminem']);
console.log(data['eminem']['image']);

            another way to access items

console.log(data.eminem.songs);
console.log(data.eminem.image);
*/

//
//  gather keys 

let artist = Object.keys(data)
console.log(artist);
//
/*
//  same
for(let key in data) {
    console.log(data[key].songs);
}


console.log(Object.keys(data).length);
*/