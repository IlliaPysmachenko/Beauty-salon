'use strict'
function main() {
	

//--------------PopUp burger menu-------------
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
	
// ------------------Active screen burger---------------
	const observer = new IntersectionObserver(enteries => {
		enteries.forEach(entry => {
			if (entry.isIntersecting) {
				document.querySelectorAll('.burger__item-link').forEach(link => {
					link.classList.toggle('active-screen', link.getAttribute('href').replace('#', '') === entry.target.id)
					
				})
			}
		})
	}, {
		threshold: 0.7,
	});

	document.querySelectorAll('section').forEach(section => observer.observe(section));

	document.querySelector('.burger__list').addEventListener('click', event => {
		if (event.target.classList.contains('burger__item-link')) {
			event.preventDefault();

			const id = event.target.getAttribute('href').replace('#', '');

			window.scrollTo({
				top: document.getElementById(id).offsetTop,
				behavior: 'smooth'
			})
		
		}
	})
	
// -----------------------------------------------------

// ------------------Slider of fouth screen-------------
	
	if (window.outerWidth < 767) {
		let cardsColl = document.querySelectorAll('.our-services__card');
		let line = document.querySelector('.slider__line');
		// let count = 0;
		let offset = 0;



		let x1 = null;

		let card = document.querySelector('.our-services__card');
		
		
		line.style.minWidth = `${(card.offsetWidth + 30)*cardsColl.length}px`;
		// console.log(line);


		function next() {
			offset -= 300;
			if (offset < -1575) {
				offset = 0;
			}

			line.style.transform = `translate(${offset}px)`;
		}


		function prev() {
			offset += 300;
			if (offset > 0) {
				offset = -1575;
			}

			line.style.transform = `translate(${offset}px)`;
		}


		document.querySelector('.next').addEventListener('click', next);
		document.querySelector('.prev').addEventListener('click', prev);




		line.addEventListener('touchstart', event => {
			const touch = event.touches[0];
			x1 = touch.clientX;
			
		})

		line.addEventListener('touchmove', event => {
			if (!x1) return false;

			let x2 = event.touches[0].clientX;
			let diff = x2 - x1;


			if (diff < 0 && diff >= -100) {
				line.style.transform = `translate(${diff}px)`;
				if (line.addEventListener('touchend', () => {
					line.style.transform = `translate(${offset}px)`
				}));
				
				// return line.style.transform = `translate(${offset}px)`;
			}
			if (diff > 0 && diff <= 100) {
				line.style.transform = `translate(${diff}px)`;
				if (line.addEventListener('touchend', () => {
					line.style.transform = `translate(${offset}px)`
				}));
				
				// return line.style.transform = `translate(${offset}px)`;
			}
			






		})
		
	}








}

main();