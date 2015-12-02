//https://www.npmjs.com/package/ember-ajax
import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
export default AjaxService.extend({
	auth: Ember.inject.service("auth-service"),
	accept: "application/json",
	reset(){
		this.set("accept", "application/json");
	},
	headers: Ember.computed('auth.token', 'accept', function(){
		let token = this.get("auth.token"),
			key = this.get("auth.app_key");
		return {
			"accept" : this.get("accept"),
			"content-type": "application/json",
			"authorization": "WRAP access_token=" + token,
			"app_key": key
		};
	})
});
