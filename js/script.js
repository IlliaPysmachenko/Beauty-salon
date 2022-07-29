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

function sliderFourthScreen () {
		let cardsColl = document.querySelectorAll('.our-services__card');
		let line = document.querySelector('.slider__line');
		let offset = 0;
		let x1 = null;

		let card = document.querySelector('.our-services__card');
		
		line.style.minWidth = `${(card.offsetWidth + 20) * cardsColl.length}px`;

		function next() {
			offset -= 320;
			if (offset < -((card.offsetWidth + 20) * cardsColl.length - 1)) {
				offset = 0;
			}

			line.style.transform = `translate(${offset}px)`;
		}


		function prev() {
			offset += 320;
			if (offset > 0) {
				offset = -(card.offsetWidth + 20) * (cardsColl.length - 1);
			}

			line.style.transform = `translate(${offset}px)`;
		}

		line.addEventListener('touchstart', event => {
			const touch = event.touches[0];
			x1 = touch.clientX;
			
		})

		let isEvent = false;

		line.addEventListener('touchmove', event => {
			if (!x1) return false;

			let x2 = event.touches[0].clientX;
			let diff = x2 - x1;

			if (diff < 0 && diff >= -100) {
				line.style.transform = `translate(${offset + diff}px)`;
				if (line.addEventListener('touchend', () => {
					line.style.transform = `translate(${offset}px)`
				}));
			}
			if (diff > 0 && diff <= 100) {
				line.style.transform = `translate(${offset + diff}px)`;
				if (line.addEventListener('touchend', () => {
					line.style.transform = `translate(${offset}px)`
				}));
			}

			if ( !isEvent ) {

				if (diff < -100) {
					next();
					isEvent = true;
				} 
				else if (diff > 150) {
					prev();
					isEvent = true;
				}
				
				setTimeout( function() {
					isEvent = false;
				}, 300 );
			}

		})

		return;
	}

	window.addEventListener('resize', () => {
		if (window.outerWidth < 767) {
			sliderFourthScreen ();
			return false;
		} 
	})

	
	








}

main();