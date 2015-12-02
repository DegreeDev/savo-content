import Ember from 'ember';

export default Ember.Controller.extend({
	apiService : Ember.inject.service(),
	ajax: Ember.inject.service(),
	preview: Ember.computed("model.asset.Id", function(){
		// debugger;
		// let previews = this.get("model.asset.Previews"),
		// 		id = this.get("model.asset.Id");
		//
		// if(previews.length === 1){
		// 	id = previews[0].Id;
		// }

		switch (this.get('model.asset.DocType')) {
			case "ppt":
			case "pptx":
			case "jpg":
			case "png":
			default:
					return this.get("apiService").getContentUrl("documents/" + this.get("model.asset.Id") + "/previews?previewType=preview");
					break;
			case "txt":
					return this.get("apiService").getContentUrl("documents/" + this.get("model.asset.Id") + "/previews?previewType=full");
		}


	}),
	download: Ember.computed("model.Id",function(){
		return this.get("apiService").getContentUrl(this.get("model.asset.UrlToDownload") +"?");
	}),
	hasSlidePreview: Ember.computed('model.asset.Previews', function() {
		return this.get("model.asset.Previews").length > 1;
	}),

	actions : {
		addComment(comment){
			var options = {
				data : JSON.stringify(comment)
			};
			var ajax = this.get('ajax');
			ajax.put("documents/" + this.get("model.asset.Id") + "/comments", options);
		}
	}
});
