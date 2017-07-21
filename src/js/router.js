import { Router } from 'backbone';
import MainView from './views/MainView';

export default Router.extend({
  routes: {
    '': 'mainRoute',
  },
  mainRoute() {
    console.log('hello world');
    const view = new MainView({
      el: '#appDiv'
    });
    view.render();
  },
});
