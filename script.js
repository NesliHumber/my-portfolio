
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        projects.forEach(project => {
            if (project.getAttribute('data-category') === category || category === 'all') {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

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

document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        
        event.preventDefault();
        
        clearErrors();
        
        let isValid = true;
        
        const name = document.getElementById('name');
        if (name.value.trim() === '') {                  // -> if name is empty,
            showError('name-error', 'Name is required'); // shows error message by linking to <span class="error" id="name-error"></span> html element
            isValid = false;                             // -> then name is not valid
        }
        
        const email = document.getElementById('email');
        if (email.value.trim() === '') {                                        // if email is empty,
            showError('email-error', 'Email is required');                      // shows error message by linking to <span class="error" id="email-error"></span>
            isValid = false;                                                    // then email is not valid
        } else if (!isValidEmail(email.value)) {                                // if email is not in a valid format,
            showError('email-error', 'Please enter a valid email address');     // then displays 'Please enter a valid email address'
            isValid = false;                                                    // then email is not valid
        }
        
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            showError('message-error', 'Message is required');
            isValid = false;
        }
        
        if (isValid) {                                                      // if after the above execution isValid = true,
            console.log('Form is valid!');                  
            console.log('Name:', name.value);
            console.log('Email:', email.value);
            console.log('Message:', message.value);
            alert('Form is submitted!');                                    // then form is submitted
            form.reset(); // clears the form
        }
    });
    
    function showError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
    }
    
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => element.textContent = '');
    }
    
    function isValidEmail(email) {
        const emailRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegular.test(email);
    }
});

const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

