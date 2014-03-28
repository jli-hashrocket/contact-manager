define([
  // These are path alias that we configured in our bootstrap
  'jquery',     // lib/jquery
  'underscore', // lib/underscore
  'backbone',    // lib/backbone
  'collections/directory',
  'views/contacts'
], function($, _, Backbone, Directory, ContactsView){
	var DirectoryView = Backbone.View.extend({
		el: $("#contacts"),
		initialize: function(){
			this.collection = new Directory(contacts);
			this.render();
		},

		render: function(){
			var that = this;
			_.each(this.collection.models, function(item){
				that.renderContact(item);
			}, this);
		},

		renderContact: function(item){
			var contactsView = new ContactsView({
				model: item
			});
			this.$el.append(contactsView.render().el);
		}

	});
	return DirectoryView;
});
