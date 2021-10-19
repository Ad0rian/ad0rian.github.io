showMainMenu();
function newGameFunction(){
    $('#mainMenu').remove();
    leftMenuCharacter();
    visualNovelScreen("newGameD");
}

function loadScreenFadeIn(elementtoLoad){

    var element = document.getElementById("layout");
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            //element.style.display = 'none';
            loadScreenFadeOut(elementtoLoad); 
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
    $('#layout').addClass("blockClass");}

function loadScreenFadeOut(elementtoLoad){
    elementtoLoad();
    var element = document.getElementById("layout");
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            //element.style.display = 'none';
            clearInterval(timer);

            $('#layout').removeClass("blockClass");  
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}



function talkCharacters(){
    if(finished_typing == false){
        console.log(finished_typing);
        //animation.substring(0 , str.length-1)
    }
}