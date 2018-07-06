import Component from '@ember/component';

export default Component.extend({
  tagName: 'form',
  classNames: ['add-movie-form'],

  title: null,
  image: null,
  description: null,

  add:null,

  submit () {
    this.get('add')(this.get('title'), this.get('description'), this.get('image'));
  }
});
