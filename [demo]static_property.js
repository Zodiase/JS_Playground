// define a function object named 'foo'
var foo = function () {
	// initialize static property
	if (this.bar === undefined) {
		this.bar = 0;
	}
	// do something with the static property
	this.bar++;
	// return the static property
	return this.bar;
}

// call the function object a couple of times and see the static property being changed and printed in the console
console.log(foo()); // should print '1'
console.log(foo()); // should print '2'
console.log(foo()); // should print '3'