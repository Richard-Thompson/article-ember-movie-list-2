import Component from '@ember/component';

export default Component.extend({
  classNameBindings:['expand'],
  expand: false,
  movies:null,
  click () {
    this.set('expand', true);
  }
});