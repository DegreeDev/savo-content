import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('custom-fields\savo-custom-field-display', 'Integration | Component | custom fields\savo custom field display', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{custom-fields\savo-custom-field-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#custom-fields\savo-custom-field-display}}
      template block text
    {{/custom-fields\savo-custom-field-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
