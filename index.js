// if click was detected
for(var i =0 ; i< document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",onclick);
}
function onclick(){//and onclick picks up the inner html of the key clicked by cursor
    var buttonName= this.innerHTML;
    makeSound(buttonName);
    buttonAnimation(buttonName);
}

//if keyboard usage was detected
document.addEventListener("keydown", function(event){ //function(event) picks the inner html of keyboard
    makeSound(event.key);//sends the character itself.
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio('tom-1.mp3');
            audio.play();
            break;
        
        case "a":
                var audio = new Audio('tom-2.mp3');
                audio.play();
                break;
        case "s":
                    var audio = new Audio('tom-3.mp3');
                    audio.play();
                    break;
        case "d":
                        var audio = new Audio('tom-4.mp3');
                        audio.play();
                        break;
        case "j":
                            var audio = new Audio('snare.mp3');
                            audio.play();
                            break;
        case "k":
                                var audio = new Audio('kick-bass.mp3');
                                audio.play();
                                break;
        case "l":
                                    var audio = new Audio('crash.mp3');
                                    audio.play();
                                    break;
                                                                            
            
        default:
            console.log(buttonName);
            break;
    }
}

function buttonAnimation(currentkey){
   var Button =  document.querySelector("."+currentkey);
   Button.classList.add("pressed");
   setTimeout(function(){
    Button.classList.remove("pressed");
   },100)
}