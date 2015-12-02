import Ember from 'ember';
import PermissionRouteMixinMixin from '../../../mixins/permission-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | permission route mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var PermissionRouteMixinObject = Ember.Object.extend(PermissionRouteMixinMixin);
  var subject = PermissionRouteMixinObject.create();
  assert.ok(subject);
});
