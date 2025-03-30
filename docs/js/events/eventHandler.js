import { inInConstruction } from "../dataModel/global.js";

document.addEventListener('DOMContentLoaded', () => {
	const banner = document.getElementById("construction-banner");
	if (inInConstruction) {
		banner.style.display = "block";
	}
	updateAll();
	updateGauges();
});