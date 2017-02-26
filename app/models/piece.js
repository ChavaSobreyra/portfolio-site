import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  url: DS.attr('string'),
  body: DS.attr(''),
  images: DS.attr(''),
  technologies: DS.attr(''),
});
