define([
  // These are path alias that we configured in our bootstrap
  'jquery',     // lib/jquery
  'underscore', // lib/underscore
  'backbone'    // lib/backbone
], function($, _, Backbone){
	var Contact = Backbone.Model.extend({
		defaults: {
			photo: "img/50x50.gif"
		}
	});
	return Contact;
});
