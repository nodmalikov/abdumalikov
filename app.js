const elLightButton = document.querySelector('.light-button');
const elDarkButton = document.querySelector('.dark-button');
const body = document.body;

// SAQLANGAN DARK MODE HOLATINI TEKSHIRISH
document.addEventListener('DOMContentLoaded', function() {
    const darkMode = localStorage.getItem('darkMode'); // RETRIEVE DARK MODE STATE FROM LOCALSTORAGE

    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

elDarkButton.addEventListener('click', function() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
});

elLightButton.addEventListener('click', function() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
});
