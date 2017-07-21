import { View } from 'backbone';
import MainViewTemplate from './templates/MainView.hbs';

export default View.extend({
  template: MainViewTemplate,
  render() {
    this.$el.html(this.template());
  }
});
