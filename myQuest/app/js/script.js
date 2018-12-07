console.log('Добро пожаловать в 4 Королевства!');

let images = document.querySelector('.images_block');
let textBlock = document.querySelector('.text_block');

const URI = 'bd.json';
const table = fetch(URI).then(x => x.json());


console.log(table);

images.innerHTML = `<img src="images/level1_complete.gif" alt="">`;

textBlock.innerHTML = 'sdfgdsg';