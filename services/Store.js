import API from './API.js';

const Store = {
  menu: null,
  cart: [],
}

const proxiedStore = new Proxy(Store, {
  set (target, property, value) {
    target[property] = value;
    if (property == "menu") {
      // Dispatch a custom event to notify the app that the menu has been updated
      window.dispatchEvent(new Event('appmenuchange'));
    }
    if (property == "cart") {
      // Dispatch a custom event to notify the app that the cart has been updated
      window.dispatchEvent(new Event('appcartchange'));
    }
    return true; // return true to indicate success
  },
  get (target, property) {
    return target[property];
  }
});

export default proxiedStore;