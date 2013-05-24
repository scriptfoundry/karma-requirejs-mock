// Koberle's mocker
// Original code here: http://stackoverflow.com/questions/11439540/how-can-i-mock-dependencies-for-unit-testing-in-requirejs/11695463#11695463
define(['underscore'], function() {
	var cnt = 0;

	var createContext = function(stubs) {
		var map = {};
		cnt++;

		_.each(stubs, function(value, key) {
			var stubName = ['stub', key.replace(/\//g, '_'), cnt].join('_');
			map[key] = stubName;
			define(stubName, function() {
				return value;
			});
		});

		return require.config({
			context: "context_" + cnt,
			map: {
				"*": map
			},
			baseUrl: require.s.contexts._.config.baseUrl
		});
	};

	return createContext;
});
