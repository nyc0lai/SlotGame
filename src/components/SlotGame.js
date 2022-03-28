//Main component modle


const SlotGame = (rootElement) => {    
    //mounting DOMUtils
    let scriptElement = document.createElement('script')
        scriptElement.setAttribute('src', 'src/components/libs/DOMUtils.js')
        document.body.appendChild(scriptElement)

    //mounting game subcomponent
    const components = [
        'src/components/SlotGame.css',
        'src/components/SlotGameBulb.js',
        'src/components/SlotGameWheel.js'
    ];

    setTimeout(()=> {
        components.forEach(component => {
       
            if(component.slice(component.indexOf('.')+1) === 'css'){
                createElement('link', {rel: 'stylesheet', href: component}, document.head)
            }else if(component.slice(component.indexOf('.')+1) === 'js'){
                createElement('script', {src: component}, document.body)
    
            }
        })

    }, 200);

    //Create a div elements
    setTimeout(()=> {
        let divContainer = createElement('div',{class:'slot-game-container'},rootElement)
            let divHeader = createElement('div',{class:'slot-game-header'},divContainer)
            let divContent = createElement('div',{class:'slot-game-content'},divContainer)
            //create divs bulb element for Header div (divHeader)
            let divTHeader = createElement('div', {class: 'slot-game-header-top'},divHeader)
            let divLHeader = createElement('div', {class: 'slot-game-header-left'},divHeader)
            let divRHeader = createElement('div', {class: 'slot-game-header-right'},divHeader)
            let divHeaderScreen = createElement('div', {class: 'slot-game-header-screen'},divHeader)

            //create divs bulb element for Contetn div (divContent)
            let divLContent = createElement('div', {class: 'slot-game-content-left'},divContent)
            let divRContent = createElement('div', {class: 'slot-game-content-right'},divContent)
            //create divs screen
            let divBlackScreen = createElement('div', {class: 'slot-game-content-bscreen'},divContent)
            let divGoldScreen = createElement('div', {class: 'slot-game-content-gscreen'},divContent)
                 let i=3;
                 while(i--){
                     let divScreenFrame = createElement('div', {class: 'slot-game-screen-frame'},divGoldScreen)
                     
                 }
    },200)

    // Add elements
    setTimeout(()=> {
    //Content left and right bulbs
    SlotGameBulb(document.querySelector('.slot-game-content-left'), 9)
    SlotGameBulb(document.querySelector('.slot-game-content-right'), 9)
    //Header left and right bulbs    
    SlotGameBulb(document.querySelector('.slot-game-header-left'), 3)
    SlotGameBulb(document.querySelector('.slot-game-header-right'), 3)
    //Header top bulbs
    SlotGameBulb(document.querySelector('.slot-game-header-top'), 7)
    //Wheel element add 
    SlotGameWhell(document.querySelectorAll('.slot-game-screen-frame'))
    },500)
}