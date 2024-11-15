document.addEventListener('DOMContentLoaded', function() {
    
    // All "Show Details" buttons are assigned to const buttons: 
    const buttons = document.querySelectorAll('.show-details-btn'); // const buttons -> NodeList of all buttons that has the class attribute as 'show-details-btn'.

    buttons.forEach(button => {
        button.addEventListener('click', function() {       // adds click event listener to const buttons ( -> all buttons that has the class attribute as 'show-details-btn')
            
            const projectDiv = this.closest('.project');
            const detailsDiv = projectDiv.querySelector('.project-details');

            if (detailsDiv.style.display === 'none') {  // -> 'none' -> detailsDiv is hidden
                detailsDiv.style.display = 'block';     // -> if detailsDiv is hidden, 'block' -> make details visible
                this.textContent = 'Hide Details';      // -> and change the button text as 'Hide Details' because details are visible now
            } else {                                    // -> if detailsDiv is NOT hidden
                detailsDiv.style.display = 'none';      // -> if detailsDiv is NOT hidden, 'none' -> make details hidden (invisible)
                this.textContent = 'Show Details';      // -> and change the button text as 'Show Details'
            }
        });
    });
});