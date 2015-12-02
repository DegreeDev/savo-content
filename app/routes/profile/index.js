import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service(),
  model(){
    var user = this.get("user.user");

    console.log(user);

    return user; 
  }
});
