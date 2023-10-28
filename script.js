"use strict";
const subsBtn = document.getElementById('btn');
const input = document.querySelector('input');
const first = document.querySelector('.one');
const second = document.querySelector('.two');
const oneSpan = document.querySelector('.oneSpan');
const dismissBtn = document.querySelector('.dismiss');
const twoSpan = document.querySelector('.twoSpan');

subsBtn.addEventListener('click', ()=> {
	const inputValue = input.value;
	if (inputValue.includes('@gmail.com')){
		first.classList.add('hidden');
		second.classList.remove('hidden');
		twoSpan.textContent = input.value;
	}
	else{
		oneSpan.classList.remove('hidden');
		oneSpan.classList.add('error');
		input.classList.add('fail');
		input.addEventListener('focus', () => {
			input.style.color = 'black';
			input.value = '';
		  });
		  
		  input.addEventListener('blur', () => {
			input.style.color = '#ff6257';
		  });
	}
});

dismissBtn.addEventListener('click', ()=> {
	second.classList.add('hidden');
})
