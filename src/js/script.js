'use strict'
function main() {
	

	//----------Toggle burger menu-------------

	let header = document.querySelector('.header__menu');
	let burger = document.querySelector('.burger');
	
	const toggleHeader = () => {
		header.classList.toggle('active');
		burger.classList.toggle('active');
	}
	
	burger.addEventListener('click', event => {
		event.stopPropagation();

		toggleHeader();
	})

	document.addEventListener('click', event => {
		let target = event.target;
		let itsHeader = target == header || header.contains(target);
		let itsBurger = target == burger;
		let headerIsActive = header.classList.contains('active');
		if(!itsHeader && !itsBurger && headerIsActive) {
			toggleHeader();
		}
	})

//----------------------------------------------


















	console.log('work');

}

main();