function counter() {
  let count = null;
  return function() {
    // count++;
    // return count;
    return ++count;
  };
}

/*
function add(a) {
	let lastResult = null; // ← closures; you’re closing in this value with your fn; allows you to make things like caches, counters, stuff like that
	return function(b) {
		console.log(‘before’, lastResult);
		lastResult = a + b;
		console.log(‘after’, lastResult);
		return lastResult;
	}
} // add(2)(3) -> returns 5
*/

module.exports = { counter };
