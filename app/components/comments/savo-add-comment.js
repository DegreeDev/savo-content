import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
    comment(){
      this.sendAction("comment", this.get("body"));
    }
  }
});
