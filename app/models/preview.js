import DS from 'ember-data';

export default DS.Model.extend({
  componentBaseFileName: DS.attr("string"),
  documentComponentId: DS.attr("number"),
});
