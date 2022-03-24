//Main component modle

const SlotGame = (rootElement) => {

    //mounting game component
    //rootElement.innerHTML = `<div class="slot-game-container"></div>`

    let divElement = document.createElement('div');
    divElement.setAttribute('class','slot-game-container');
    rootElement.appendChild(divElement);

    //mounting game style component
    //document.head.innerHTML += '<link rel="stylesheet" href="src/components/SlotGame.css">';
    let linkElement = document.createElement('link');
    linkElement.setAttribute('rel','stylesheet');
    linkElement.setAttribute('href','src/components/SlotGame.css');
    document.head.appendChild(linkElement);



    //mounting game subcomponents (wheel)
    let scriptElement = document.createElement('script');
    scriptElement.src = 'src/components/SlotGameWheel.js';
    document.body.appendChild(scriptElement);

    setTimeout(() => {
        SlotGameWhell(
            document.querySelector('.slot-game-container')
            )
    },500)

}