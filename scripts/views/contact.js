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
		events: {
			"click .edit_contact" : "editContact"
		},
		initialize: function(){
			this.render();
		},
		render: function(){
			var tmpl = _.template(this.template);
			this.$el.html(tmpl(this.model.toJSON()));
			return this;
		},
		showModal: function(){
			var modal = $('<div class="modal"/>');
			var overlay = $('<div class="overlay"/>');
			var content = "<h2>Edit Contact</h2>";
			content += "<label>Name:</label><input type='text' name='name' value='" + this.model.attributes["name"] +"'/><br/>";
			content += "<label>Address:</label><input type='text' name='address' value='" + this.model.attributes["address"] +"'/><br/>";
			content += "<label>Tel:</label><input type='text' name='tel' value='" + this.model.attributes["tel"] +"'/><br/>";
			content += "<label>Email:</label><input type='text' name='email' value='" + this.model.attributes["email"] +"'/><br/>";
			content += "<label>Type:</label><select><option value='family'>family</option><option value='friend'>friend</option><option value='colleage'>colleague</option></select><br/>";
			content += "<input type='submit' value='submit' name='submit' />"
			$('body').append(modal, overlay);
			$('.modal').html(content);

		},
		editContact: function(){
			this.showModal();
		}
	});
	return ContactView;
});