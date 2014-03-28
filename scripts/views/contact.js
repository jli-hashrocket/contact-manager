define([
  // These are path alias that we configured in our bootstrap
  'jquery',     // lib/jquery
  'underscore', // lib/underscore
  'backbone',    // lib/backbone
  'collections/directory',
], function($, _, Backbone, Directory){
	var ContactView = Backbone.View.extend({
		el: $(".contact"),
		tagName: "div",
		className: "contact-container",
		template: $("#contactTemplate").html(),
		initialize: function(){
			this.render();
		},
		render: function(){
			var tmpl = _.template(this.template);
			this.$el.html(tmpl(this.model.toJSON()));
			return this;
		}

	});
	return ContactView;
});