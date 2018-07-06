import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addMovie(title, description, image) {
      var newMovie = this.store.createRecord('movie', {
        title:title,
        description:description,
        image:image
      });
      newMovie.save();
    } 
  },
});