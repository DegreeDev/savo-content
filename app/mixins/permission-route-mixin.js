import Ember from 'ember';

export default Ember.Mixin.create({
  auth: Ember.inject.service("auth-service"),
	didTransition(transition) {
    this._super(transition);
    var token = this.get("auth.token");
        
    if(token){
      //you're authorized
      console.log("YOU GOT A TOKEN");
    } else {
      this.replaceWith("login");
    }
  }
});