import Ember from 'ember';

export default Ember.Component.extend({
  apiService: Ember.inject.service(),
  mappedSlides: Ember.computed("slides", function(){
    let context = this,
        api = this.get("apiService"),
        doc = this.get("document");

    let top10 = this.get('slides').map(function(slide){
      return {
        preview : api.getContentUrl("documents/" + doc + "/previews?id=" + slide.Id + "&previewType=thumbnail"),
        full: api.getContentUrl("documents/" + doc + "/previews?id=" + slide.Id + "&previewType=full"),
      };
    });
    return top10;
  })
});
