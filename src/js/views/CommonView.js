import { View } from 'backbone';
import CommonViewTemplate from './templates/CommonView.hbs';

export default View.extend({
  template: CommonViewTemplate,
  initialize(options) {
    this.color = options.color || 'cornflowerblue';
  },
  render() {
    this.$el.html(this.template({ color: this.color }));
  }
});
