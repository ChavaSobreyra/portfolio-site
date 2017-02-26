import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('blog');
  this.route('portfolio', function() {
    this.route('piece', { path: '/:piece_slug' });
  });
  this.route('about-me');
});

export default Router;
