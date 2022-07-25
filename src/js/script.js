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










}

main();