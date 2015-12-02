import Ember from 'ember';
import config from './config/environment';
import PermissionRouteMixin from './mixins/permission-route-mixin';
var Router = Ember.Router.extend(PermissionRouteMixin, {
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('assets', function() {
    this.route("asset", { path: ":asset_id"}, function() {});
  });
  this.route('assets-loading');
  this.route('profile', function() {});
});

export default Router;
