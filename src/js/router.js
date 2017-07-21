import { Router } from 'backbone';
import NavigationView from './views/NavigationView';
async function getMainView() {
  const MainView = await import(/* webpackChunkName: 'Main' */ './views/MainView.js');
  return MainView.default;
}
async function getAboutView() {
  const AboutView = await import(/* webpackChunkName: 'About' */ './views/AboutView.js');
  return AboutView.default;
}
export default Router.extend({
  content: '#appDiv',
  routes: {
    '': 'mainRoute',
    'about': 'aboutRoute'
  },
  initialize() {
    this.navViewInst = new NavigationView({
      el: '#navDiv',
      router: this
    });
    this.navViewInst.render();
  },
  mainRoute() {
    getMainView().then(this.renderAysncView.bind(this));
  },
  aboutRoute() {
    getAboutView().then(this.renderAysncView.bind(this));
  },
  renderAysncView(View) {
    this.viewInst = new View({
      el: this.content
    })
    this.viewInst.render();
  }
});
