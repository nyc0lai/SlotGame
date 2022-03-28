const SlotGameBulb = (rootElement, count) => {
    //mounting the DOM component
    for(let i=0; i<count; i++){
    createElement('div', {class: 'slot-game-bulb'}, rootElement);
    }
   
    //setting animation timer
    let divBulbs = document.querySelectorAll('.slot-game-bulb');
        divBulbs.forEach(div => {
            let timer = setInterval(()=>{
                if(div.className == 'slot-game-bulb'){
                    div.className = 'slot-game-bulb lighted'
                }else{div.className = 'slot-game-bulb'}
        
            },Math.floor(Math.random()*1000+1000))

        }
    )
    
}