import { test } from 'qunit';
import moduleForAcceptance from 'chavasobreyra/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | portfolio');

test('visiting /portfolio', function(assert) {
  visit('/portfolio');

  andThen(function() {
    assert.equal(currentURL(), '/portfolio');
  });
});


test('/portfolio has a list of peieces', function(assert) {
  visit('/portfolio');

  andThen(function() {
    const pieces = find('.pieces');


  });
});
