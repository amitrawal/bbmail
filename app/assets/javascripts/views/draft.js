MailApp.Views.Draft = Backbone.View.extend({
  tagName: 'li',
  render: function() {
    var mailTemplate = _.template(templateLoader.get('draft'));
    this.$el.html(mailTemplate(this.model.toJSON()));
    return this;
  }
});