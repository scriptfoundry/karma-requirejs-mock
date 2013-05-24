define([], function () {
	var Qux = function () {
		this.id = Math.random().toString().replace('0.', '');
	};
	Qux.prototype.toString = function () {
		return "qux" + this.id;
	};
	return Qux;
});