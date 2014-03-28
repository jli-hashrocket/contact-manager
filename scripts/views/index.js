define([
  // These are path alias that we configured in our bootstrap
  'jquery',     // lib/jquery
  'underscore', // lib/underscore
  'backbone'    // lib/backbone
], function($, _, Backbone){
	var IndexView = Backbone.View.extend({
		el: "#intro-container",
		template: _.template($("#introTemplate").html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			this.$el.html(this.template({ contactLink: 'index.html#directory'}));
		}
	});
	return IndexView;
});	
