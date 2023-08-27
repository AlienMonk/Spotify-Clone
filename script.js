console.log("Welcome to Spotify")
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"I wonder - Kanye West", filePath:"songs/1.mp3", coverPath:"covers/1.jpeg"},
    {songName:"WASTE - Kxllswxtch", filePath:"songs/2.mp3", coverPath:"covers/2.jpeg"},
    {songName:"Salam-e-ishq", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Salam-e-ishq", filePath:"songs/4.mp3", coverPath:"covers/4.jpeg"},
    {songName:"Salam-e-ishq", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Salam-e-ishq", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Salam-e-ishq", filePath:"songs/7.mp3", coverPath:"covers/7.jpeg"},
]
songItems.forEach((element, i)=> {
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log(('timeupdate'));
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('click', function(e) {
    // Calculate the clicked position relative to the start of the progress bar
    let clickPosition = e.clientX - this.getBoundingClientRect().left;
     // Calculate the width of the progress bar
    let progressBarWidth = this.offsetWidth;
    // Calculate the click position as a percentage of the total width
    let clickPercentage = clickPosition / progressBarWidth;
    // Calculate the corresponding time in the audio
    let audioDurationTime = clickPercentage * audioElement.duration;
    // Set the audio's current time to the calculated time
    audioElement.currentTime = audioDurationTime;
});
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById()