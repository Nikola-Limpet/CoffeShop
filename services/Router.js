const Router = {
  init: ()  => {
    document.querySelectorAll('.navlink').forEach(navlink => {
      navlink.addEventListener('click', (event) => {
        event.preventDefault();
        // prevent the default action of the link from happening (i.e. navigating to a new page)
        const url = event.target.getAttribute('href');
        // get the href attribute of the link that was clicked
        Router.go(url);
      });

    });
    window.addEventListener('popstate', (event) => {
      // Check the state of the browser
      const route = event.state.route;
      if (route) {
        Router.go(route, false);
      }
    });
    // Check the initial URL of the page
    Router.go(location.pathname);
  },
  go: (route, addToHistory=true) => {

    console.log('Navigating to:', route);
    
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }
    let pageElement  = null;
    switch (route) {
      case '/':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Menu';
        break;
      case '/order':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Order';
        break;
      
      default:
        if (route.startsWith('/product-')) {
          pageElement = document.createElement('h1');
          pageElement.textContent = 'Detials';
          const paramId = route.substring(route.lastIndexOf('-') + 1);
          pageElement.dataset.id = paramId;
        }
    }
    if (pageElement) {
    // const cache = document.querySelector('main').children[0].remove();
    const cache = document.querySelector('main');
    cache.innerHTML = '';
    cache.appendChild(pageElement);
    window.scrollX = 0;
    window.scrollY = 0;
    }
  }
}

export default Router;