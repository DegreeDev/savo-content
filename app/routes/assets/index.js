import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
	model(){
    //return this.store.query('document', { count : 50 });
    return this.get("ajax").request("documents?count=50&docType=jpeg");
	}
});
