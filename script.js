
//Intialise the variables
let songIndex=0;
let audioElement= new Audio('song/0.mp3');
let masterPlay= document.getElementById('masterPlay');
let myprogressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItems'));

let songs = [
  {
    songName: "Teri Mitti",
    filePath: "song/0.mp3",
    coverPath: "covers/flag.webp",
  },

    {
        songName: "Chitta-Shiddat",
        filePath: "song/1.mp3",
        coverPath: "covers/chitta.jpg",
      },

  {
    songName: "Hosh walon ko khabar kya",
    filePath: "song/2.mp3",
    coverPath: "covers/hosh.jpg",
  },
  {
    songName: "Ishaaron Ishaaron Me",
    filePath: "song/3.mp3",
    coverPath: "covers/ishaaron.jpg",
  },
  {
    songName: "Kali Kali Zulfaon Me",
    filePath: "song/4.mp3",
    coverPath: "covers/kali.jpg",
  },
  {
    songName: "Dekha Ek Khwaab",
    filePath: "song/5.mp3",
    coverPath: "covers/khwaab.jpg",
  },
  
  {
    songName: "Hare Krishna Hare Rama",
    filePath: "song/6.mp3",
    coverPath: "covers/rama.jpg",
  }
 
 
];

songItems.forEach((element,i)=>{
   
   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity= 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
   
    //update Seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value=progress;
});

myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    // console.log(element);
   element.addEventListener('click', (e)=>{
   
    makeAllPlays();
    songIndex= parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src= `song/${songIndex}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity= 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

   }) 
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6)
    songIndex=0;
    else
    songIndex+=1;
    
    audioElement.src= `song/${songIndex}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    songIndex=6;
    else
    songIndex-=1;

    audioElement.src= `song/${songIndex}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

