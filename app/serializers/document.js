import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data = payload.Items;
    delete payload.Items;
    return this.normalizeArrayResponse(...arguments);
  }
});
