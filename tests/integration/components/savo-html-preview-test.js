import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('savo-html-preview', 'Integration | Component | savo html preview', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{savo-html-preview}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#savo-html-preview}}
      template block text
    {{/savo-html-preview}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
