import { moduleForModel, test } from 'ember-qunit';

moduleForModel('piece', 'Unit | Model | piece', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('it has an attribute: title', function(assert) {
  const model = this.subject();
  const hasAttr = Object.keys(model.toJSON()).indexOf('title') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: slug', function(assert) {
  const model = this.subject();
  const hasAttr = Object.keys(model.toJSON()).indexOf('slug') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: url', function(assert) {
  const model = this.subject();
  const hasAttr = Object.keys(model.toJSON()).indexOf('url') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: body', function(assert) {
  const model = this.subject();
  const hasAttr = Object.keys(model.toJSON()).indexOf('body') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: technologies', function(assert) {
  const model = this.subject();
  const hasAttr = Object.keys(model.toJSON()).indexOf('technologies') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: images', function(assert) {
  const model = this.subject();
  const hasAttr = Object.keys(model.toJSON()).indexOf('images') > -1;
  assert.ok(hasAttr);
});

test('it has a computed property based on url property: humanUrl', function(assert) {
  const model = this.subject({
    url:  "http://www.testurl.com/"
  });

  const hasAttr = model.get('humanUrl');

  assert.ok(hasAttr);
});
