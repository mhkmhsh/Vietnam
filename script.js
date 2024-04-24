document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("#carouselExampleFade button");
    const infoText = document.getElementById("info");
    const title = document.getElementById("title");

    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            // Update text and images based on button click
            switch(index) {
                case 0:
                    infoText.textContent = "Information for slide 1"; // Update text
                    title.textContent = "The Vietnam War - Slide 1"; // Update title
                    break;
                case 1:
                    infoText.textContent = "Information for slide 2"; // Update text
                    title.textContent = "The Vietnam War - Slide 2"; // Update title
                    break;
                // Add more cases for additional buttons
                default:
                    // Default case
                    break;
            }

            // Optional: Update images dynamically
            // You can change the src attribute of the images to display different images
            // Example: document.querySelector('.carousel-item.active img').src = 'new_image.jpg';
        });
    });
});
