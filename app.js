//Dubstep
function dubstepSection(){

    const dubstepGenre = data.filter((music) => {
        return music.genre == "Dubstep";
    })
    .map((music) => {
        console.log('music', music);
        return `
        <div class = "dubstepCategory"> 
            <img src="${music.image}" class="images"> 
            <div>Artist: ${music.artist}</div>
            <div>Song: ${music.song}</div>
            <div> <audio controls class="audio"> <source src='${music.play}'</div>
            </div>
        </div>
        `;
    })
    .join('');

    const dubstepArtist = document.querySelector('#bottom');
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
            <img src="${music.image}" class="images">
            <div>Artist: ${music.artist}</div>
            <div>Song: ${music.song}</div>
            <div> <audio controls class="audio"> <source src='${music.play}'</div>
            </div>
        </div>
        `;
    })
    .join('');

    const rapArtist = document.querySelector('#bottom');
    rapArtist.innerHTML = rapGenre;
}


//Anime
function animeSection(){

    const animeGenre = data.filter((music) => {
        return music.genre == "Anime";
    })
    .map((music) => {
        console.log('music', music);
        return `
        <div class = "animeCategory">
            <img src="${music.image}" class="images"</div>
            <div>Artist: ${music.artist}</div>
            <div>Song: ${music.song}</div>
            <div> <audio controls class="audio"> <source src='${music.play}'</div>
            </div>
        </div>
        `;
    })
    .join('');

    const animeArtist = document.querySelector('#bottom');
    animeArtist.innerHTML = animeGenre;
}


//Nightcore
function nightcoreSection(){

    const nightcoreGenre = data.filter((music) => {
        return music.genre == "Nightcore";
    })
    .map((music) => {
        console.log('music', music);
        return `
        <div class = "nightcoreCategory">
            <img src="${music.image}" class="images"</div>
            <div>Artist: ${music.artist}</div>
            <div>Song: ${music.song}</div>
            <div> <audio controls class="audio"> <source src='${music.play}'</div>
            </div>
        </div>
        `;
    })
    .join('');

    const nightcoreArtist = document.querySelector('#bottom');
    nightcoreArtist.innerHTML = nightcoreGenre;
}


//Favorites
function favoriteSection(){

    const favoriteGenre = data.filter((music) => {
        return music.genre[0] == " ";
    })
    .map((music) => {
        console.log('music', music);
        return `
        <div class = "favoriteCategory">
            <img src="${music.image}" class="images"</div>
            <div>Artist: ${music.artist}</div>
            <div>Song: ${music.song}</div>
            <div> <audio controls class="audio"> <source src='${music.play}'</div>
            </div>
        </div>
        `;
    })
    .join('');

    const favoriteArtist = document.querySelector('#bottom');
    favoriteArtist.innerHTML = favoriteGenre;
}