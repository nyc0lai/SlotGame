//Main component modle


const SlotGame = (rootElement) => {   
    
    let results = [];
    const wheels =[];
    let points = 3; 
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
       
            if(component.endsWith('.css')){
                createElement('link', {rel: 'stylesheet', href: component}, document.head)
            }else if(component.endsWith('.js')){
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
                divHeaderScreen.innerText = points+' points';

            //create divs bulb element for Contetn div (divContent)
            let divLContent = createElement('div', {class: 'slot-game-content-left'},divContent)
            let divRContent = createElement('div', {class: 'slot-game-content-right'},divContent)
            let divButtonGo = createElement('button', {class: 'slot-game-button-go'}, divContent)

                //start game
                divButtonGo.addEventListener('click', ()=> {
                    results = [];
                    wheels.forEach( wheel => wheel.dispatchEvent(new Event('whellTurn')) )

                        if(points>0){
                            setTimeout(() => {
                                const count = {};
                                results.forEach(element => {
                                count[element] = (count[element] || 0) + 1;
                            });

                            for(let item in count)
                            {
                                if(count[item] == 2) {
                                    points += 3;
                                    console.log('plus 3 points')
                                }else if(count[item] == 3){
                                    if(item == 'seven'){
                                    points *= 10;
                                    console.log('x10 points')
                                    }
                                    else{
                                    points += 5;
                                    console.log('plus 5 points')
                                    }
                                }
                                else {
                                    
                                } 
                            }
                                points--;
                                //console.log('minus 1 point')
                                if(points>0){
                                divHeaderScreen.innerText = points+' points';
                                }else{
                                    divHeaderScreen.innerText = 'GAME OVER';
                                    divButtonGo.disabled = true;
                                } 
                            },2000)
                        } 
                })
            //create divs screen
            let divBlackScreen = createElement('div', {class: 'slot-game-content-bscreen'},divContent)
            let divGoldScreen = createElement('div', {class: 'slot-game-content-gscreen'},divContent)
                 let i=4;
                 while(i-- > 1){
                     let divScreenFrame = createElement('div', {class: `slot-game-screen-frame-${i}`},divGoldScreen)             
                 }
    },200)

    // Add elements
    setTimeout(()=> {
    //Content left and right bulbs
    SlotGameBulb(document.querySelector('.slot-game-content-left'), 12)
    SlotGameBulb(document.querySelector('.slot-game-content-right'), 12)
    //Header left and right bulbs    
    SlotGameBulb(document.querySelector('.slot-game-header-left'), 4)
    SlotGameBulb(document.querySelector('.slot-game-header-right'), 4)
    //Header top bulbs
    SlotGameBulb(document.querySelector('.slot-game-header-top'), 11)
    
    //Wheel element add 
    for(let count=1; count<=3; count++){
        wheels.push(SlotGameWhell(document.querySelector(`.slot-game-screen-frame-${count}`), (selectedFrame)=>{
            results.push(selectedFrame)
        })
        )

        }
    },500)
}