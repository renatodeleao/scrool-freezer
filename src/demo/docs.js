import ScrollFreezer from '../lib/index.js';

(function(){
	const f = new ScrollFreezer();
	const toggle = document.querySelector('[data-scroll-freezer-toggle]');
	toggle.addEventListener('click', () => f.toggleFreeze());
})();