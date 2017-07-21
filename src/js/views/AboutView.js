import { View } from 'backbone';
import AboutViewTemplate from './templates/AboutView.hbs';

export default View.extend({
  template: AboutViewTemplate,
  render() {
    this.$el.html(this.template());
  }
});
