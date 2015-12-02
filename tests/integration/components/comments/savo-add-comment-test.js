import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('comments\savo-add-comment', 'Integration | Component | comments\savo add comment', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{comments\savo-add-comment}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#comments\savo-add-comment}}
      template block text
    {{/comments\savo-add-comment}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
