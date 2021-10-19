function leftMenuCharacter(){
    
    $('#lateralMenu').removeClass("hiddenClass");
    
    $('#lateralMenu').append(

                        '<div id="menuCharacter" class="menuCharacterClass">'+
                            '<div id="stats" class="statsClass">'+
                                '<div id="date" class="dateClass">'+
                                '<div id="dateContent" class="dateContentClass">'+stats.world.day+'/'+stats.world.month +'</div>'+
                                '</div>'+
                                '<div id="place" class="placeClass">'+
                                '<div id="placeContent" class="placeContentClass">'+stats.world.city+'</div>'+
                                '</div>'+
                                '<div id="money" class="moneyClass">'+
                                '<div id="moneyContent" class="moneyContentClass">'+stats.character.money+' C</div>'+
                                '</div>'+
                            '</div>'+
                            '<div id="companion" class="companionClass"></div>'+
                            '<div id="lvlMerchant" class="lvlMerchantClass"></div>'+
                            '<div id="contentCart" class="contentCartClass">'+
                            '<div id="contentCartContainer" class="contentCartContainerClass"></div>'+
                            '</div>'+
                            '<div id="optionMenu" class="optionMenuClass">'+
                                '<div id="worldMapMenu" class="worldMapMenuClass"></div>'+
                                '<div id="homeCart" class="homeCartClass"></div>'+
                                '<div id="notesMenu" class="notesMenuClass"></div>'+
                                '<div id="settingsMenu" class="settingsMenuClass"></div>'+
                            '</div>'+
                    '</div>');
}