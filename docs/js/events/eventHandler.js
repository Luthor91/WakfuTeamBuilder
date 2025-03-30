import { inInConstruction } from "../dataModel/global.js";
import { updateGauges } from "../update/gauge.js";
import { updateAll } from "../update/update.js";

document.addEventListener('DOMContentLoaded', () => {
	const banner = document.getElementById("construction-banner");
	if (inInConstruction) {
		banner.style.display = "block";
	}
	updateAll();
	updateGauges();
});