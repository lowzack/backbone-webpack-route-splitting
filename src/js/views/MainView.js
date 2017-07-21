import { View } from 'backbone';
import MainViewTemplate from './templates/MainView.hbs';

console.log(MainViewTemplate());

export default View.extend({
  template: MainViewTemplate,
  render() {
    this.$el.html(this.template());
  }
});
