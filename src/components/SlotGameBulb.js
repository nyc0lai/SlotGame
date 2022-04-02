const SlotGameBulb = (rootElement, count=1) => {
    // mounting the DOM component
    // mounting game whell-style component
  
    for(let i=0; i<count; i++){
        createElement('div', {class: 'slot-game-bulb'}, rootElement);
        }
    // document.querySelector('[]')
    createElement('link', {rel:'stylesheet', href:'src/components/SlotGameBulb.css'}, document.head);
     
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