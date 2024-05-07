// O'zgaruvchilar
// const phone = 'iphone 14 pro'
// console.log(phone)

// const phoneCamera = '48MP'
// console.log(phoneCamera)

// const elText = document.querySelector('.text')
// const elButton = document.querySelector('.button')

// elButton.addEventListener('click', function () {
//     elText.textContent = 'Boshqa nom';
// });

const elLightButton = document.querySelector('.light-button');
const elDarkButton = document.querySelector('.dark-button');

elDarkButton.addEventListener('click', function () {
    document.body.classList.add('dark-mode');
});

elLightButton.addEventListener('click', function () {
    document.body.classList.remove('dark-mode');
});



