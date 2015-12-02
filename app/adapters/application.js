
export default DS.RESTAdapter.extend({
  authService: Ember.inject.service(),
  headers: Ember.computed('authService.token', 'authService.app_key', function() {
    let token = this.get("authService.token"),
       key = this.get("authService.app_key");
    return {
      accept: "application/json",
      "authorization": "WRAP access_token=" + token,
      "app_key": key
    };
  })
});
