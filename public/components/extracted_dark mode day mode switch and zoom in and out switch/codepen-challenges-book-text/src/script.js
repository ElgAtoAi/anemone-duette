function changeTheme() {
	const body = document.querySelector("body");
	body.classList == "light-theme"
		? (body.classList = "dark-theme")
		: (body.classList = "light-theme");
}

function enlargeText() {
	const fs = getComputedStyle(document.documentElement).getPropertyValue("--fs");
	const value = parseFloat(fs);
	document.documentElement.style.setProperty("--fs", `${value + 0.1}em`);
}

function reduceText() {
	const fs = getComputedStyle(document.documentElement).getPropertyValue("--fs");
	const value = parseFloat(fs);
	document.documentElement.style.setProperty("--fs", `${value - 0.1}em`);
}
