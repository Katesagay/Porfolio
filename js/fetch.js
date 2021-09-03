/*
Use .fetch() to load in new html snippets. A function then removes the old HTML and adds
the new ones in the correct position in the DOM. Animate the whole thing in and out.
*/
let resumeLink = document.querySelector('#resume-link');
let skillsLink = document.querySelector('#skills-link');
let projectsLink = document.querySelector('#projects-link');
let contactLink = document.querySelector('#contact-link');


let linkArray = [ skillsLink, projectsLink, contactLink]; //resumeLink

linkArray.forEach((eachLink) => {
	eachLink.addEventListener('click', (e) => {
		switch (eachLink) {

			case resumeLink:
				fetchPage(eachLink, 'resume.html');
				break;

			case skillsLink:
				fetchPage(eachLink, 'skills.html');
				break;

			case projectsLink:
				fetchPage(eachLink, 'projects.html');
				break;

			case contactLink:
				fetchPage(eachLink, 'contact.html');
				break;
		}
	})
})

function fetchPage(link, page) {

	let baseURL = `${window.location.protocol}//${window.location.hostname}`;

	if (window.location.port) {
		baseURL += `:${window.location.port}`;
		
	}
					
		


	fetch(`${baseURL}/${page}`)

		
		.then(function(response) {
			return response.text()
		})

		


		.then(function(html) {
			let doc = new DOMParser().parseFromString(html, "text/html");

			anime({
				
				targets:  '.text-section h1,.new-content .text-section h1, .new-content .text-section p, .new-content .text-section div,.new-content .text-section ul,.new-content .text-section li ' +
					'.text-section form,.text-section input, .text-section textarea, .text-section strong, .text-section button, .text-section h4, .text-section img, ' +
					'.text-section picture, .text-section source',
				translateX: 700,
				opacity: 0,
				easing: 'easeInExpo',
				duration: 700,
				complete: (anim) => {
					document.querySelector('.column-wrapper').remove();
				}
			})

			setTimeout(function () {
				document.querySelector('body').insertBefore(doc.querySelector('.new-content'), document.querySelector('.gallery-nav'));

				anime({
					targets: '.text-section h1,.new-content .text-section h1, .new-content .text-section p, .new-content .text-section div,.new-content .text-section ul,.new-content .text-section li ' +
						'.text-section form,.text-section input, .text-section textarea, .text-section strong, .text-section button, .text-section h4, .text-section img, ' +
						'.text-section picture, .text-section source',
					translateX: [-600, 0],
					delay: (el, i) => 100 * i,
					opacity: [0, 1],
					easing: 'easeOutExpo',
				})
			}, 700);
		
			}
		
		
		)

}

