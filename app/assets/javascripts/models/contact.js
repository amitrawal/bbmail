MailApp.Models.Contact = Backbone.Model.extend({
  url: function() {
    return 'contacts/' + this.id;
  }
});

MailApp.Collections.ContactList = Backbone.Collection.extend({
  model: MailApp.Models.Contact,
  url: '/contacts'
});
