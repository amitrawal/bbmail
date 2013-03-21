MailApp.Views.MailDetail = Backbone.View.extend({
  tagName: 'ul',
  id: 'email-list',
  render: function() {
    var template = _.template(templateLoader.get('mail_detail'));
    this.$el.html(template(this.model.toJSON()));
    return this;
  }
});