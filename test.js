import test from 'ava';
import has from '.';

test('main', t => {
  // Error Handling
  t.throws(() => {
    has(123);
  }, {
    instanceOf: TypeError,
    message: 'Expected input to be a string, got number'
  });

  t.throws(() => {
    has('123', 123);
  }, {
    instanceOf: TypeError,
    message: 'Expected substring to be a string or array, got number'
  });

  // Single substring
  t.is(has('unicorns', 'uni'), true);
  t.is(has('unicorns', 'UNI'), false);
  t.is(has('unicorns', 'UNI', {caseSensitive: false}), true);

  // Multiple
  t.is(has('unicorns', ['uni', 'corn']), true);
  t.is(has('unicorns', ['UNI', 'corn']), true);
  t.is(has('unicorns', ['UNI', 'CORN']), false);
  t.is(has('unicorns', ['UNI', 'CORN'], {caseSensitive: false}), true);

  // Locale matching
  t.is(has('\u0130', 'i', {caseSensitive: false}), true);
  t.is(has('\u0130', ['i'], {caseSensitive: false}), true);
});
