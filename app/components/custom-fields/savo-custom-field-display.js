import Ember from 'ember';

export default Ember.Component.extend({
  showEmptyFields: true,
  fieldsToShow : Ember.computed('showEmptyFields', 'fields', function(){
    if(this.get('showEmptyFields')){
      return this.get('fields');
    } else {
      return this.get('fields').filter(function(item){
        return item.Value;
      });
    }
  })
});
