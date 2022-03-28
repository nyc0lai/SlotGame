const SlotGameWhell = (rootElement) => {
    
    rootElement.forEach(element => {
        createElement('div', {class: 'slot-game--wheel'}, element);
    });
    
    
  
    //mounting game whell-style component
    createElement('link', {rel:'stylesheet', href:'src/components/SlotGameWheel.css'}, document.head);
}