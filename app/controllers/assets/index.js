import Ember from 'ember';

export default Ember.Controller.extend({
	assetSorting: ['Title'],
	sortedAssets: Ember.computed.sort("model.Items", "assetSorting")
});
