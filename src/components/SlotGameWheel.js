const getInt = (min, max) => {
    return parseInt(Math.random()*(max-min)+min);
}

const SlotGameWhell = (rootElement, spinEndCB) => {
    const signs = [
        {type: 'heart', position: 1},           //0
        {type: 'seven', position: 16.666},      //1
        {type: 'star', position: 33.333},       //2
        {type: 'grape', position: 50},          //3
        {type: 'crystal', position: 66.666},    //4
        {type: 'dollar', position: 83.333},     //5
        {type: 'cherry', position: 100}         //6
    ];

         let random = getInt(1, signs.length);
            while(random--){
                signs.push(signs.shift());  
                }

            let divWheel = createElement('div', {class: 'slot-game--wheel',
                                                style: `background-position-y:${signs[0].position}%`}
                                                , rootElement);
            // let divInput = createElement('input', {type: 'text', value: '0'}, divWheel)
            // divInput.value = signs[0].type
            divWheel.addEventListener('whellTurn', () => { 
                let turns = getInt(1,signs.length);
                
                while(turns--){
                    signs.push( signs.shift() );
                    renderWheelFrame()     
                }
                        
                })
            divWheel.addEventListener('transitionstart', ()=>{
                document.querySelector('.slot-game-button-go').disabled = true
                document.querySelector('.slot-game-button-go').innerText = 'WAIT'

            })    

            divWheel.addEventListener('transitionend', ()=>{
                document.querySelector('.slot-game-button-go').disabled = false
                document.querySelector('.slot-game-button-go').innerText = "GO"
                spinEndCB(signs[0].type)
            })

            const renderWheelFrame = () => {              
                divWheel.style.backgroundPositionY = signs[0].position + '%';
            }

    //mounting game whell-style component
    createElement('link', {rel:'stylesheet', href:'src/components/SlotGameWheel.css'}, document.head);
    
    return divWheel;
}