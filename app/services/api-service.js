import Ember from 'ember';

export default Ember.Service.extend({
	auth:Ember.inject.service("auth-service"),
	getContentUrl(url){
		return url + "&wrap_access_token=" + this.get("auth.token") + "&app_key=" + this.get("auth.app_key");
	}
});
