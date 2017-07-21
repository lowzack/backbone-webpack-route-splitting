import { View } from 'backbone';
import CommonView from './CommonView';
import AboutViewTemplate from './templates/AboutView.hbs';

export default View.extend({
  template: AboutViewTemplate,
  render() {
    this.$el.html(this.template());
    this.boxView = new CommonView({
      el: this.$el.find('.boxHolder')
    })
    this.boxView.render();
  }
});
