define(['Bar'], function (Bar) {
	var Foo = function () {
		this.id = "Foo" + Math.random().toString().replace('0.', '');
		this.bar = new Bar();
	};
	Foo.prototype.toString = function () {
		return this.id + " (" + this.bar.toString() + ") ";
	};
	
	return Foo;
});