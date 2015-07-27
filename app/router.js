import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('index', { path: '/'}, function() {
    this.resource('needs-favour');
    this.resource('can-help');
  });
  this.resource('how-it-works');
  this.resource('about-us');
  this.resource('help-out');
});

export default Router;
