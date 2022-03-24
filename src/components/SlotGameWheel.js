const SlotGameWhell = (rootElement) => {

    //rootElement.innerHTML += `<div class="slot-game--wheel">7</div>`;

    let divElement = document.createElement('div');
    divElement.setAttribute('class','slot-game--wheel');
    divElement.textContent = '7';
    rootElement.append(divElement)

    //mounting game whell-style component
    //document.head.innerHTML += '<link rel="stylesheet" href="src/components/SlotGameWheel.css">';
    let linkElement = document.createElement('link');
    linkElement.setAttribute('rel','stylesheet');
    linkElement.setAttribute('href','src/components/SlotGameWheel.css');
    document.head.append(linkElement);

}