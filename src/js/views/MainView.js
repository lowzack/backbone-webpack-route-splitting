import { View } from 'backbone';
import CommonView from './CommonView';
import MainViewTemplate from './templates/MainView.hbs';

export default View.extend({
  template: MainViewTemplate,
  render() {
    this.$el.html(this.template());
    this.boxView = new CommonView({
      el: this.$el.find('.redBox'),
      color: 'red'
    });
    this.boxView.render();
  }
});
