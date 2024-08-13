import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';


window.app = {}
app.store = Store;

// use window.addEventListener to wait for the DOM to load before running the code
// inside the callback function of window.addEventListener 
window.addEventListener('DOMContentLoaded', async () => { 
  loadData();
  
});