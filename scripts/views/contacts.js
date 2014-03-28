define([
  // These are path alias that we configured in our bootstrap
  'jquery',     // lib/jquery
  'underscore', // lib/underscore
  'backbone'    // lib/backbone
], function($, _, Backbone){
	var ContactsView = Backbone.View.extend({
		tagName: "article",
		className: "contacts-container",
		template: $("#contactsTemplate").html(),

		render: function(){
			var tmpl = _.template(this.template);
			$(this.el).html(tmpl(this.model.toJSON()));
			return this;
		}
	});
	return ContactsView;
});
