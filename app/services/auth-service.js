import Ember from 'ember';

export default Ember.Service.extend({
	user : Ember.inject.service(),
	ajax : Ember.inject.service(),
	storage: Ember.inject.service("storage-service"),
	token_id: "savo.auth.token",
	init(){
		this._super();

		let storage = this.get("storage"),
				token_id = this.get('token_id'),
				token = storage.getItem( token_id );

		if(token){
		 	this.set("token", token);
		}

	},
	app_key: "cc216e53-d0d6-4e7b-80c7-82705394f727",
	token: null,
	renewal_token: "",
	isAuth: Ember.computed.notEmpty("token"),
	logout(){
		this.set("token", null);
	},
	login(username, password){
		let context = this,
				options = {
					url:"authentication/basic",
					method: "POST",
					headers: {
						"authorization": "Basic " + window.btoa(username + ":" + password),
						"app_key": this.get("app_key")
					}
				};
		return Ember.$.ajax(options).fail(function(result){
					console.error("could not log in");
				}).then(function(result){
					context.set("token", result.wrap_access_token);
					context.set("renewal_token", result.wrap_access_renewaltoken);
					//set the cookie
					 context.get("storage").setItem( context.get("token_id") , result.wrap_access_token);
				}).then(function(){
					context.get("ajax").request("users/@me").then(function(user) {
						context.set("user.user", user);
					});
				});
	}
});
