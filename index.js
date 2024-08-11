// Dictionary for sound mapping
const soundMap = {
    "w": "tom-1.mp3",
    "a": "tom-2.mp3",
    "s": "tom-3.mp3",
    "d": "tom-4.mp3",
    "j": "snare.mp3",
    "k": "kick-bass.mp3",
    "l": "crash.mp3"
  };
  
  // Preload audio files
  const audioMap = {};
  for (let key in soundMap) {
    audioMap[key] = new Audio(soundMap[key]);
  }
  
  // Event listener for button clicks
  document.querySelector(".set").addEventListener("click", function(event) {
    if (event.target.classList.contains("drum")) {
      var buttonName = event.target.innerHTML;
      makeSound(buttonName);
      buttonAnimation(buttonName);
    }
  });
  
  // Event listener for keydown events
  document.addEventListener("keydown", function(event) {
    if (soundMap[event.key]) {
      makeSound(event.key);
      buttonAnimation(event.key);
    }
  });
  
  function makeSound(key) {
    if (audioMap[key]) {
      audioMap[key].currentTime = 0; // Reset the audio to start
      audioMap[key].play();
    } else {
      console.log(key);
    }
  }
  
  function buttonAnimation(currentKey) {
    var button = document.querySelector("." + currentKey);
    if (button) {
      button.classList.add("pressed");
      setTimeout(function() {
        button.classList.remove("pressed");
      }, 100);
    }
  }