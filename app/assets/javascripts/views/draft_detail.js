MailApp.Views.DraftDetail = Backbone.View.extend({
  tagName: 'ul',
  id: 'email-list',
  render: function() {
    var template = _.template(templateLoader.get('draft_detail'));
    this.$el.html(template(this.model.toJSON()));
    return this;
  }
});