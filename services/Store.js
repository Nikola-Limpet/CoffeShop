const Store = {
  menu: null,
  cart: [],
}

const proxiedStore = new Proxy(Store, {
  set: (target, property, value) => {
    // the set trap intercepts the assignment of a property on the target
    // in this case the target is the Store object and property is the property being set
    // and value is the value being assigned to the property
    target[property] = value;
    if (property === "menu") {
      // Dispatch a custom event to notify the app that the menu has been updated
      window.dispatchEvent(new CustomEvent('menu-updated'));
    }

    
  }
});

export default proxiedStore;