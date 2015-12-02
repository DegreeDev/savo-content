import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('comments\savo-comments-display', 'Integration | Component | comments\savo comments display', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{comments\savo-comments-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#comments\savo-comments-display}}
      template block text
    {{/comments\savo-comments-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
