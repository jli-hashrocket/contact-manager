require.config({
	paths: {
		jquery: 'lib/jquery',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		app: 'app/app'
	}
});

require(['app'], function(App){
})

