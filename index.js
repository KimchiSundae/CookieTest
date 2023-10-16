(function() {
    'use strict';

    // Function to create a button with a textured image
    const createButtonWithTexture = () => {
        const button = document.createElement("button");
        button.style.position = "absolute";
        button.style.top = "100px";
        button.style.left = "100px";
        button.style.width = "150px";
        button.style.height = "150px";
        button.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')"; // Replace with your image URL
        button.style.backgroundSize = "cover";
        button.addEventListener('click', () => {
            Game.cookies = Game.cookies + 100; // Increase the number of cookies by 100
            Game.RuinTheFun(); // Update the game state
        });
        document.body.appendChild(button);
    };

    // Call the function to create the button
    createButtonWithTexture();
})();
