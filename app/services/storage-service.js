import Ember from 'ember';

export default Ember.Service.extend({
  setItem(key, item){
    sessionStorage.setItem(key, item);
  },
  getItem(key){
    return sessionStorage.getItem(key);
  },
  removeItem(key){
    sessionStorage.removeItem(key);
  }
});
