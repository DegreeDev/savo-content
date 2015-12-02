import Ember from 'ember';

export default Ember.Route.extend({
	auth: Ember.inject.service("auth-service"),
	actions : {
		login(){
			var route = this;
			this.get("auth").login( this.get("username"),  this.get("password") ).then(function(){
				route.transitionTo("assets");
			});
		}
	}
});
