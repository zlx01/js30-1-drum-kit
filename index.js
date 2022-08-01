const musicMap = {
  a: "./sounds/clap.wav",
  s: "./sounds/hihat.wav",
  d: "./sounds/kick.wav",
  f: "./sounds/openhat.wav",
  g: "./sounds/boom.wav",
  h: "./sounds/ride.wav",
  j: "./sounds/snare.wav",
  k: "./sounds/tom.wav",
  l: "./sounds/tink.wav",
}
document.addEventListener('keydown', (e) => {
  const {key} = e;
  if (key in musicMap) {
    const music = new Audio(musicMap[key]);
    music.play();
    // 增加动画
    const letterElement = document.querySelector(`[data-key=${key}]`)
    letterElement.classList.add('playing');
    setTimeout(() => {
      letterElement.classList.remove('playing')
    }, 100)
  }
})
