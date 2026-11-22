const hero = document.querySelector('.hero');

// Track mouse movement across the hero section
hero.addEventListener('mousemove', (e) => {
	const rect = hero.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;

	// Update CSS variables with live mouse position
	hero.style.setProperty('--x', `${x}px`);
	hero.style.setProperty('--y', `${y}px`);
	hero.style.setProperty('--spotlight-opacity', '1');
});

// Hide the JK background again when the mouse leaves the hero section
hero.addEventListener('mouseleave', () => {
	hero.style.setProperty('--spotlight-opacity', '0');
});

window.getSelection()?.removeAllRanges();