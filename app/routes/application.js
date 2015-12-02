import Ember from 'ember';

export default Ember.Route.extend({
	authService: Ember.inject.service(),
	activate(){
		let isAuth = this.get("authService.isAuth");

		if(isAuth){
			console.log("is authorized");
		} else {
			console.log("is not authorized");
		}
	}
});
