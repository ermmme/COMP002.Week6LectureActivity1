
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputField = document.getElementById('username');
    const colorPicker = document.getElementById('favoriteColor');

    console.log('Entered Name:', inputField.value);
    console.log('Selected Color:', colorPicker.value);

    alert('Form submission prevented!');
});

const colorInput = document.getElementById('favoriteColor');

colorInput.addEventListener('input', function(event) {
    console.log('Color input changed to:', colorInput.value);

    localStorage.setItem('favoriteColor', colorInput.value);
});

window.addEventListener('load', function() {
    const savedColor = localStorage.getItem('favoriteColor');
    if (savedColor) {
        colorInput.value = savedColor;
        console.log('Saved color from localStorage:', savedColor);  // Display it in the console
    }
});
