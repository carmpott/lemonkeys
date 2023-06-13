function playSong(audioName) {
  let audio = new Audio(audioName);
  audio.loop = true;
  audio.play();
}
playSong("LazyWalkByCheel.mp3");
