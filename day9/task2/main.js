let audio = document.querySelector("audio");
let playBtn = document.querySelector(".play");
let pauseBtn = document.querySelector(".pause");
let stopBtn = document.querySelector(".stop");
let muteBtn = document.querySelector(".mute");
let currentTimes = document.querySelector(".current");
let volumeBar = document.getElementById("volume");
let seekBar = document.getElementById("seek");
let songNmae = document.querySelector(".name h2");
let imge = document.querySelector(".img img");

const music = [
  {
    name: "1th",
    sound: "./playListData/sound1.mp3",
    img: "./playListData/img1.jpg",
  },
  {
    name: "2th",
    sound: "./playListData/sound2.mp3",
    img: "./playListData/img2.jpg",
  },
  {
    name: "3th",
    sound: "./playListData/sound3.mp3",
    img: "./playListData/img3.jpg",
  },
];
let index = 0;
let timer;

const loadMusic = (i) => {
  imge.src = music[i].img;
  audio.src = music[i].sound;
  songNmae.innerHTML = music[i].name;
  audio.load();
};

playBtn.addEventListener("click", function () {
  audio.play();
});
pauseBtn.addEventListener("click", function () {
  audio.pause();
});

audio.addEventListener("loadedmetadata", function () {
  seekBar.setAttribute("max", audio.duration);
});

stopBtn.addEventListener("click", function () {
  audio.pause();
  audio.currentTime = 0;
});

muteBtn.addEventListener("click", function () {
  audio.muted = !audio.muted;
  if (audio.muted) {
    muteBtn.innerHTML = "unmuted";
    audio.volume = 0;
  } else {
    muteBtn.innerHTML = "muted";
    audio.volume = 1;
  }
});

volumeBar.addEventListener("input", function () {
  audio.volume = volumeBar.value;
});

audio.addEventListener("volumechange", function () {
  volumeBar.value = audio.volume;
});

seekBar.addEventListener("input", function () {
  audio.currentTime = seekBar.value;
});
audio.addEventListener("timeupdate", function () {
  currentTimes.innerHTML = audio.currentTime;
  seekBar.value = audio.currentTime;
});

const change = function (action) {
  if (action === "next" && index < music.length - 1) {
    index++;
  } else if (action === "previous" && index > 0) {
    index--;
  }
  loadMusic(index);
  audio.play();
};
