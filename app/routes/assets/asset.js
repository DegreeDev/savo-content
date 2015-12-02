import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	canViewComments: true,
	model(data){
		let context = this;
		return Ember.RSVP.hash({
				asset : this.get("ajax").request("documents/" + data.asset_id),
				comments : this.get("ajax").request("documents/" + data.asset_id + "/comments").then(function(results) {
					return results.Items;
				}).catch(function(){
					console.log("Forbidden, and thats ok.");
					context.set("canViewComments", false);
				}),
		});
	}
});
