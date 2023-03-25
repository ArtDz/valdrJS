'use strict'

const btn = document.getElementById('btn');
const box = document.getElementById('box');

console.log(box);

console.log(btn);
btn.addEventListener('click', function() {
    box.classList.toggle('anim')
})
