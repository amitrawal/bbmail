MailApp.Views.Mailbox = Backbone.View.extend({
  tagName: 'ul',
  subView: null,
  render: function() {
    var mailboxTemplate = templateLoader.get('mailbox');
    var self = this;
    this.$el.html(mailboxTemplate);
    this.renderSubView();
    return this;
  },
  renderSubView: function() {
    this.$el.find('.emailListContainer').append(this.subView.render().el);
  }
});