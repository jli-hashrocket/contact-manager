define([
  // These are path alias that we configured in our bootstrap
  'jquery',     // lib/jquery
  'underscore', // lib/underscore
  'backbone',    // lib/backbone
  'models/contacts'
], function($, _, Backbone, Contact){
	var Directory = Backbone.Collection.extend({
		model: Contact
	});
	return Directory;
});
