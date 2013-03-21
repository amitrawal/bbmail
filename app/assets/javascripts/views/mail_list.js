MailApp.Views.MailList = Backbone.View.extend({
  tagName: 'ul',
  id: 'email-list',
  render: function() {
    var self = this;
    _.each(this.model.models, function(mail) {
      self.$el.append(new MailApp.Views.Mail({model: mail}).render().el);
    });
    return this;
  }
});