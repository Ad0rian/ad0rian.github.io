function showMainMenu(){
    $('#layout').append(   
                    '<div id="mainMenu" class="mainMenuClass">'+
                        '<div id="newGame" class="buttonMenuClass"onclick="loadScreenFadeIn(newGameFunction)">'+
                        '<h1 class="menuTextClass">'+textMenu.mainMenu.newGame +'</h1>'+
                        '</div>'+
                        '<div id="loadGame" class="buttonMenuClass">'+
                        '<h1 class="menuTextClass">'+textMenu.mainMenu.loadGame +'</h1>'+                        
                        '</div>'+
                        '<div id="options" class="buttonMenuClass">'+
                        '<h1 class="menuTextClass">'+textMenu.mainMenu.settings +'</h1>'+                       
                        '</div>'+
                    '</div>');
}