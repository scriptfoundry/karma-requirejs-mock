define(['chai', 'mocker'], function (chai, mocker) {
	var expect = chai.expect;
	
	describe("Bar", function () {
		it("should set up okay", function (done) {
			var mocks = {
				'baz/Qux': function () {
					this.id = "123";
					this.toString = function () { return "qux123"; };
				}
			};
			var context = mocker(mocks);
			context(['Bar'], function (Bar) {
				var bar = new Bar();
				expect(1).to.be.a("number");
				done();
			});
		});
		
		it("should have correct properties", function () {
			require(['Bar'], function (Bar) {
				var bar = new Bar();
				expect(bar).to.respondTo('toString');
				expect(bar).to.have.property('id');
				expect(bar.id).to.match(/^\d+$/);
				expect(bar.toString()).to.contain('qux');
			});
		});
	});
});