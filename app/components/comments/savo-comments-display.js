import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  actions : {
    comment(body){
      this.sendAction("comment", body);
    }
  }
});
