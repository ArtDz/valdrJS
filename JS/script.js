'use strict'

const btn = document.getElementById('btn');
const box = document.getElementById('box');

btn.addEventListener('click', function() {
    box.classList.toggle('anim')
})
