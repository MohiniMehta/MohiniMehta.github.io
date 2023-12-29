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