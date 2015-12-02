import DS from 'ember-data';

export default DS.Model.extend({
  createdDate: DS.attr('date'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  docType: DS.attr('string'),
  customFields: DS.hasMany("custom-field"),
  previews: DS.hasMany("preview")
});
