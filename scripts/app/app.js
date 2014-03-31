define([
	'jquery',
	'underscore',
	'backbone',
	'collections/directory',
	'views/index',
	'views/contacts',
	'views/directory',
	'views/contact',
	'models/contacts'
	], function($, _, Backbone, Directory, IndexView, ContactsView, DirectoryView, ContactView, Contact){
	var contacts = [
		        { id: 1, name: "Jason", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
		        { id: 2, name: "Dad", address: "555 Fairfax St, Fairfax, VA 22032", tel: "0123456789", email: "anemail@me.com", type: "family" },
		        { id: 3, name: "Jose", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
		        { id: 4, name: "John", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
		        { id: 5, name: "Grandpa", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
		        { id: 6, name: "Kevin", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
		        { id: 7, name: "Eugene", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
		        { id: 8, name: "Mom", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" }
	];

	var DirectoryView = Backbone.View.extend({
		el: $("#contacts"),
		initialize: function(){
			this.collection = new Directory(contacts);
			this.render();
		},

		render: function(){
			var that = this;
			_.each(this.collection.models, function(item){
				that.renderContacts(item);
			}, this);
		},

		renderContacts: function(item){
			var contactsView = new ContactsView({
				model: item
			});
			this.$el.append(contactsView.render().el);
		}

	});

	// Routes
	var ContactRouter =  Backbone.Router.extend({
		routes: {
			'' : 'home',
			'directory': 'viewDirectory',
			'directory/:id': 'viewContact'
		},
		home: function(){
			var home = new IndexView();
			return home;
		},
		viewDirectory: function(){
			var directory = new DirectoryView();
 		},
 		viewContact: function(id){
 			var all_contacts = new Directory(contacts);
 			var contact = new ContactView({model: all_contacts.get({id: id})});
 		}
	});

	var appRouter = new ContactRouter();
	Backbone.history.start();

});
