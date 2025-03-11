import { updateAll } from './update/update.js';
import { updateGauges } from './update/gauge.js';


document.addEventListener('DOMContentLoaded', () => {
  updateAll();
  updateGauges();
});