import Component from '@ember/component';
import { computed } from '@ember/object';

const DUMMY_MOVIES = [{
  title: 'Some movie',
  description: 'Some movie description',
  image: 'https://picsum.photos/300/200/?random'
}, {
  title: 'Some movie',
  description: 'Some movie description',
  image: 'https://picsum.photos/300/200/?random'
}, {
  title: 'Some movie',
  description: 'Some movie description',
  image: 'https://picsum.photos/300/200/?random'
}, {
  title: 'Some movie',
  description: 'Some movie description',
  image: 'https://picsum.photos/300/200/?random'
}, {
  title: 'Some movie',
  description: 'Some movie description',
  image: 'https://picsum.photos/300/200/?random'
}];

export default Component.extend({
  tagName: 'ul',

  classNames:['movie-list'],

  movies: computed(function() {
    return DUMMY_MOVIES;
  })
});
