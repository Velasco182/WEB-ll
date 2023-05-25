const rp = document.querySelector(".rp");
const pl = document.querySelector(".play");

let name= "Tu no vives así", artist= " Arcangel ft. Bad Bunny", gender=" TRAP";
const song1 = ["Rojo"," Arcangel ft. Anuel AA"," TRAP."];
const song = [name, artist, gender];

const reproductor = {
    play: function(name, artist, gender){
        console.log(`Reproduciendo: ${name}\nArtista: ${artist}\nGénero: ${gender}`);
    },
    stop: function(){
        console.log(`Música parada.`);
    },
    pause: function(){
        console.log(`Música en pausa.`);
    },
    next: function(song1){
        console.log(`Siguiente canción: ${song1}`);
    },
    previous: function(song){
        console.log(`Anterior canción: ${song}`);
    }

} 

function play(){
    rp.innerHTML= `<img src="https://lastfm.freetls.fastly.net/i/u/ar0/a16b68cd9b3bfac50044900049a0742d.jpg"><h2>${name}<\h2><h6>Artista: ${artist}<\h6><h6>Género: ${gender}<\h6>`;
}

function stop(){
    alert("Música parada.");
}

function pause(){
    alert("Música pausada.");
}

function next(){
    rp.innerHTML= `<img src="https://pm1.narvii.com/6685/a9c7ed691814b38cb75b270598e2393fb9ef0882_hq.jpg"><h2> ${song1[0]}<\h2><h6>Artista: ${song1[1]}<\h6><h6>Género: ${song1[2]}<\h6>`;
}

function previous(){

    play();
    // rp.innerHTML= `<img src="https://lastfm.freetls.fastly.net/i/u/ar0/a16b68cd9b3bfac50044900049a0742d.jpg"><br><h4>Reproduciendo: ${song[0]}<\h4><br><h6>Artista: ${song[1]}<\h6><br><h6>Género: ${song[2]}<\h6><br>`;
}

reproductor.play(name, artist, gender);
reproductor.stop();
reproductor.pause();
reproductor.next(song1);
reproductor.previous(song);