import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('asset\preview\savo-slides', 'Integration | Component | asset\preview\savo slides', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{asset\preview\savo-slides}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#asset\preview\savo-slides}}
      template block text
    {{/asset\preview\savo-slides}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
