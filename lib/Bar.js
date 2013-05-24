define(['baz/Qux'], function (Qux) {
	var Bar = function () {
		this.id = Math.random().toString().replace('0.', '');
		this.qux = new Qux();
	};
	Bar.prototype.toString = function () {
		return "Bar" + this.id + " (" + this.qux.toString() + ")";
	};
	
	return Bar;
});