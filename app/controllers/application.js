import Ember from 'ember';

export default Ember.Controller.extend({
  authService: Ember.inject.service(),
  isAuth: Ember.computed.readOnly("authService.isAuth"),
  actions : {
    logout(){
      this.get("authService").logout();
      this.transitionTo("login");
    }
  }
});
