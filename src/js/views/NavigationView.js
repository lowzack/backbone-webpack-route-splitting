import { View } from 'backbone';
import NavigationViewTemplate from './templates/NavigationView.hbs';

export default View.extend({
  template: NavigationViewTemplate,
  events: {
    'click .home': 'homeNav',
    'click .about': 'aboutNav'
  },
  initialize(options) {
    this.router = options.router;
  },
  render() {
    this.$el.html(this.template());
  },
  homeNav(event) {
    event.preventDefault();
    this.router.navigate('#', { trigger: true });
  },
  aboutNav(event) {
    event.preventDefault();
    this.router.navigate('/about', { trigger: true });
  }
});
