// this should print 'function' instead of 'object'
console.log(typeof function () {});
// this should print 'yes'
console.log(function () {} instanceof Object ? 'yes' : 'no');