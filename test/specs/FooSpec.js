define(['chai', 'mocker'], function (chai, mocker) {
	var expect = chai.expect;
	describe("Foo", function () { 
		describe("Base functionality", function () {
			
			it("should have correct Foo with a mocked Bar", function (done) {
				var mocks = { 
					'Bar': function () {
						this.id = "Bar12345";
					}
				};
				var context = mocker(mocks);

				context(['Foo'], function (Foo) {
					expect(1).to.be.a("number");
					done();
				});
				
			});
			
			it("should have correct Foo with mocked Qux", function (done) {
				var mocks = { 
					'baz/Qux':function () {
						this.id = "qux9999";
					}
				};
				var context = mocker(mocks);
				
				context(['Foo'], function (Foo) {
					expect(1).to.be.a("number");
					done();
				});
			});
			
			it("should obey the rules of javascript", function (done) {
				require(['Foo'], function (Foo) {
					expect("1").to.be.a("string");
					done();
				});
			});
		});
	});
});

