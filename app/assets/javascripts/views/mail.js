MailApp.Views.Mail = Backbone.View.extend({
  tagName: 'li',
  render: function() {
    var mailTemplate = _.template(templateLoader.get('mail'));
    this.$el.html(mailTemplate(this.model.toJSON()));
    return this;
  }
});