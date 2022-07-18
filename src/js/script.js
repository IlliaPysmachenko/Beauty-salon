'use strict'
function main() {

	function burgerBtn() {
		let header = document.querySelector('.header__menu');
		header.classList.toggle('active');
		
		let burger = document.querySelector('.burger');
		burger.classList.toggle('active');
		
		
	}

	document.querySelector('.burger').addEventListener('click', burgerBtn)




















	console.log('work');

}

main();