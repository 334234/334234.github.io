document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');

    container.addEventListener('mousemove', function(e) {
        createLightBall(e.clientX, e.clientY);
    });

    function createLightBall(x, y) {
        const lightBall = document.createElement('div');
        lightBall.classList.add('light-ball');
        lightBall.style.left = `${x}px`;
        lightBall.style.top = `${y}px`;

        container.appendChild(lightBall);

        setTimeout(() => {
            lightBall.remove();
        }, 2000); 
    }
});

$('.expand-button').click(function() {
   
    var listItem = $(this).closest('.list-item');

   
    listItem.find('.paragraph').slideToggle();

    
    $(this).text(function(i, text) {
        return text === '➕' ? '➖' : '➕';
    });
});
