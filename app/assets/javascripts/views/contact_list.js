MailApp.Views.ContactList = Backbone.View.extend({
  tagName: 'ul',
  id: 'contact-list',
  render: function() {
    var self = this;
    _.each(this.model.models, function(contact) {
      var template = _.template(templateLoader.get('contact'));
      var li = $('<li>');
      self.$el.append(
        li.append(
          template(contact.toJSON())
        )
      );
    });
    return this;
  }
});