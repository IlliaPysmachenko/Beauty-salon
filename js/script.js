'use strict'
function main() {
	

	//----------Toggle burger menu-------------
	let bg = document.querySelector('.burger__body');
	let header = document.querySelector('.burger__bg');
	let burger = document.querySelector('.burger');
	
	const toggleHeader = () => {
		header.classList.toggle('active');
		burger.classList.toggle('active');
		bg.classList.toggle('active');
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

	if (window.innerWidth > 992) {
		// burgerHeight();
		console.log(document.querySelector('.wrapper').style.height);
	}


	function burgerHeight () {
		
		document.getElementsByClassName('burger__bg').style.height = document.querySelector('body').style.height;
	}












window.addEventListener('scroll', function (e) {
	
		// let div = document.querySelector('.wra')
	const pageScroll = window.scrollY;
	const params = document.querySelector('.wrapper__first').getBoundingClientRect();
	if (pageScroll + params.top > params.top + params.height ) {

		console.log(1);
		}
	})







	// pageScroll > params.top && 


	// params.top + 





	console.log(document);

}

main();