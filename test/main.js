var tests = Object.keys(window.__karma__.files).filter(function (file) {
      return /Spec\.js$/.test(file);
});

requirejs.config({
	baseUrl: 'base/lib/',
	paths: {
		'chai': '../test/node_modules/chai/chai',
		'underscore': '../test/vendor/underscore/underscore',
		'mocker': '../test/vendor/mocker/mocker'
	},
	shim: {
		'chai': {
			'exports': 'chai'
		}
	},
	deps: tests,
	callback: window.__karma__.start
});


requirejs(['chai'], function () {
	/* This method can be used for any setup work you need to do. */
});