var numberofdrumbutton =document.querySelectorAll(".drum").length;
for(var i=0;i<numberofdrumbutton;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttoninnerHTML=this.innerHTML;
        makesound(buttoninnerHTML);
        buttonanimation(buttoninnerHTML);
    });
    document.addEventListener("keypress",function(event){
        makesound(event.key);
        buttonanimation(event.key);
    })



function makesound(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
        case "j":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;

        default:console.log(buttoninnerHTML);
    }

}
}

function buttonanimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}

