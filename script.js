var boomButton = document.getElementById('boom')
var clapButton = document.getElementById('clap')
var kickButton = document.getElementById('kick')
var boomSound = document.getElementById('boomSound')
var clapSound = document.getElementById('clapSound')
var kickSound = document.getElementById('kickSound')
boomButton.addEventListener('click', function () {
  boomSound.play()
})
boomButton.addEventListener('mouseenter', function () {
  boomSound.play()
})
clapButton.addEventListener('click', function () {
  clapSound.play()
})
clapButton.addEventListener('mouseenter', function () {
  clapSound.play()
})
kickButton.addEventListener('click', function () {
  kickSound.play()
})
kickButton.addEventListener('mouseenter', function () {
  kickSound.play()
})
