import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('universe', function() {
    this.resource('universe.supercluster', { path: 'supercluster' }, function() {});
  });
  this.resource('atoms', function() {
    this.resource('atom', { path: ':atom_id' }, function() {});
  });
});

export default Router;
