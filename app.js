var wow = [0];

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
            <div> <audio controls class="audio"> <source src='${music.play}'> </div>
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
            <div> <audio controls class="audio"> <source src='${music.play}'> </div>
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
            <img src="${music.image}" class="images">
            <div>Artist: ${music.artist}</div>
            <div>Song: ${music.song}</div>
            <div> <audio controls class="audio"> <source src='${music.play}'> </div>
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
            <img src="${music.image}" class="images">
            <div>Artist: ${music.artist}</div>
            <div>Song: ${music.song}</div>
            <div> <audio controls class="audio"> <source src='${music.play}'> </div>
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
            <img src="${music.image}" class="images">
            <div>Artist: ${music.artist}</div>
            <div>Song: ${music.song}</div>
            <div> <audio controls class="audio"> <source src='${music.play}'> </div>
        </div>
        `;
    })
    .join('');

    const favoriteArtist = document.querySelector('#bottom');
    favoriteArtist.innerHTML = favoriteGenre;
}


//Random Song
function randomSong(){
   const i = Math.floor((Math.random() * random.length));
   document.getElementById("musicArea").innerHTML = `
   <audio autoplay class="audio"> <source src='${random[i]}'></source>;
   `
}


//Secrets
function no(){
    const oof = `
    <div id = 'gback'>
        <button onclick = 'secret()' id='noU'> No U </button>
        <button onclick ='goBack()' id = 'back'> Go Back </button>
    </div>
    `;

    const why = document.querySelector('body');
    why.innerHTML = oof;

}


//back button
function goBack(){
    const gb = `
    <h1 id="title">Laron's Playlist</h1>
   
    <div id="music">
        <div id="top">
            <button onclick = "no()" id="genres">Genres:</button>
            <button onclick = "dubstepSection()"> Dubstep </button>
            <button onclick = "rapSection()"> Rap </button>
            <button onclick = "animeSection()"> Anime </button>
            <button onclick = "nightcoreSection()"> Nightcore </button>
            <button onclick = "favoriteSection()"> Favorites </button>
            <button onclick = "randomSong()" id="random"> Random! </button>
            <button onclick = "earRap()" id="warning"> Don't Click This! </button>
        </div>

        <div id="bottom"> 
            <h1 id=":)"> Choose A genre :) </h1>
        </div>
        <div id="musicArea"> </div>
    </div>
    <script src="data.js"></script>
    <script src="app.js"></script>
    `;

     const yep = document.querySelector('body');
     yep.innerHTML = gb;
}


//no u
function secret(){
     wow ++;
     if(wow == 30){
         const fiddle = `
         <img src = 'http://pm1.narvii.com/6626/6b2d6d5853244e0e1a2bca20ed433693e202298a_hq.jpg' id = 'riddleFiddle'>
         `
         const riddle = document.querySelector('body');
         riddle.innerHTML = fiddle;
     }
};