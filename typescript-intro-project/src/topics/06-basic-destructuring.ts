
console.log("---------- 06-basic-destructuring ----------");

/*
    Destructuring: helps us obtain information about an object more quickly.
*/


interface AudioPlayerModel {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: DetailsModel;
}

interface DetailsModel {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayerModel = {
    audioVolumen: 90,
    songDuration: 36,
    song: 'Perfect',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

console.log(`Song: ${audioPlayer.song}, Author: ${audioPlayer.details.author}`);



/*Tips
    song: anotherSong -> song is the name of the attribute and anotherSong is the name of the constant variable.
    If the name of the variable is the same as the name of the attribute, we only write one name.
*/

//Example: With the destructuring we will not have to write audioPlayer.details.author

const song = 'New Song';
console.log(song);

//Destructuring
const {song: anotherSong, songDuration: duration, details} = audioPlayer;
const {author, year} = details;

console.log(`Song: ${anotherSong}, Duration: ${duration}, Author: ${author}, Year: ${year}`);



export{};