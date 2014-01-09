var foo = {
	// method to reset the property
	reset: function () {
		this.bar = 1;
	},
	// method to check the status of the property
	test: function () {
		console.log(typeof this.bar);
	},
	// method to delete the property
	delete: function () {
		delete this.bar;
	}
};

console.info('should print "undefined" since property is not set yet');
foo.test();

console.log('reset property');
foo.reset();

console.info('should print "number"');
foo.test();

console.log('delete property');
foo.delete();

console.info('should print "undefined" since property is deleted');
foo.test(); 