// script.js

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.dynamic-btn');

    buttons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            button.style.backgroundColor = 'blue'; // Change color on mousemove
        });

        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#008080'; // Reset color on mouseout
        });
    });
});
