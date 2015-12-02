import Ember from 'ember';

export default Ember.Component.extend({
	auth: Ember.inject.service("auth-service"),
	ajax: Ember.inject.service(),
	conent: "Loading preview...",
	actions: {
		load(){
			// this.set("ajax.accept", "text/html");
			// let id = this.get("id"),
			//  		url = "documents/" + id + "/previews?previewType=html&wrap_access_token=" + this.get("auth.token") + "&app_key=" + this.get("auth.app_key"),
			// 		context = this;
			// return this.get('ajax').request(url).then(function(result){
			// 	console.log(result);
			// 	context.set('content', result);
			// 	context.notifyPropertyChange("content");
			// 	context.get("ajax").reset();
			// });
		}
	}
});
