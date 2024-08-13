import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';


window.app = {}
app.store = Store;
app.router = Router;

// use window.addEventListener to wait for the DOM to load before running the code
// inside the callback function of window.addEventListener 
window.addEventListener('DOMContentLoaded', async () => { 
  loadData();
  app.router.init();
  
});