document.addEventListener('DOMContentLoaded', function () {
    var confettiSettings = {
        target: 'confetti-js',
        max: 40,           
        size: 1,            
        animate: true,       
        props: ['circle'],   
        colors: [[255, 255, 255]], 
        clock: 3,           
        rotate: true,        
        start_from_edge: true 
    };

    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
});

// document.oncontextmenu = ()=>{
//     alert("Dont try right click")
//     return false
// }
// document.onkeydown=e=>{
//     if(e.key=="F12"){
//         alert("Dont try to inspect element")
//         return false
//     }
//     if(e.ctrlKey && e.key=="u"){
//         alert("Dont try to view page")
//         return false
//     }
//     if(e.ctrlKey && e.key=="c"){
//         alert("Dont try to copy page element")
//         return false
//     }
// }