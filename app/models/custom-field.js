import DS from 'ember-data';

export default DS.Model.extend({
  customFieldLibraries: DS.attr('string'),
  name: DS.attr('string'),
  value: DS.attr('string'),
});
