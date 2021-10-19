
 function visualNovelScreen(dialogue){

    $('#lateralVN').removeClass("hiddenClass");
    $('#lateralMenu').addClass("lateralMenuClassBlocked");
    


    //asyncFunction
    monogatari.run("jump "+dialogue)

/*
    const scriptDebug = document.createElement("script")
    scriptDebug.type ="text/javascript"
    scriptDebug.src ="./engine/debug/debug.js"
    document.head.appendChild(scriptDebug)
    eval(scriptDebug)

    const scriptMonogatari = document.createElement("script")
    scriptMonogatari.type ="text/javascript"
    scriptMonogatari.src ="./engine/core/monogatari.js"
    document.head.appendChild(scriptMonogatari)
    eval(scriptMonogatari)

    const scriptOptions = document.createElement("script")
    scriptOptions.type ="text/javascript"
    scriptOptions.src ="./js/options.js"
    document.head.appendChild(scriptOptions)
    eval(scriptOptions)

    const scriptStorage = document.createElement("script")
    scriptStorage.type ="text/javascript"
    scriptStorage.src ="./js/storage.js"
    document.head.appendChild(scriptStorage)
    eval(scriptStorage)

    const scriptMain = document.createElement("script")
    scriptMain.type ="text/javascript"
    scriptMain.src ="./js/main.js"
    document.head.appendChild(scriptMain)
    eval(scriptMain)

    const scriptBasic = document.createElement("script")
    scriptBasic.type ="text/javascript"
    scriptBasic.src ="./js/script.js"
    document.head.appendChild(scriptBasic)
    eval(scriptBasic)

    const script = document.createElement("script")
    script.type ="text/javascript"
    script.src ="./js/"+dialogue+".js"
    document.head.appendChild(script)
    eval(script)*/   
}