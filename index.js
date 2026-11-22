const hero = document.querySelector('.hero');

// Track mouse movement across the hero section
if (hero) {
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
}

window.getSelection()?.removeAllRanges();

document.addEventListener("DOMContentLoaded", () => {
	const hamburgerBtn = document.getElementById("hamburgerBtn");
	const navLinks = document.getElementById("navLinks");

	if (!hamburgerBtn || !navLinks) return;

	hamburgerBtn.addEventListener("click", () => {
		const isOpen = navLinks.classList.toggle("is-open");
		hamburgerBtn.classList.toggle("is-open", isOpen);
		hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
	});

	// Close menu automatically when a link is clicked
	navLinks.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			navLinks.classList.remove("is-open");
			hamburgerBtn.classList.remove("is-open");
			hamburgerBtn.setAttribute("aria-expanded", "false");
		});
	});
});