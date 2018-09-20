//Dubstep
function dubstepSection(){

    const dubstepGenre = data.filter((music) => {
        return music.genre == "Dubstep";
    })
    .map((music) => {
        console.log('music', music);
        return `
        <div class = "dubstepCategory"> 
            <div> ${music.image}</div>
            <div>Artist: ${music.artist}</div>
            <div>Song: ${music.song}</div>
        </div>
        `;
    })
    .join('');

    const dubstepArtist = document.querySelector('#musicSelection');
    dubstepArtist.innerHTML = dubstepGenre;
}


//Rap
function rapSection(){

    const rapGenre = data.filter((music) => {
        return music.genre == "Rap";
    })
    .map((music) => {
        console.log('music', music);
        return `
        <div class = "rapCategory">
            <div> ${music.image}</div>
            <div>Artist: ${music.artist}</div>
            <div>Song: ${music.song}</div>
        </div>
        `;
    })
    .join('');

    const rapArtist = document.querySelector('#musicSelection');
    rapArtist.innerHTML = rapGenre;
}