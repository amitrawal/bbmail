MailApp.Views.DraftList = Backbone.View.extend({
  tagName: 'ul',
  id: 'email-list',
  render: function() {
    var self = this;
    _.each(this.model.models, function(draft) {
      self.$el.append(new MailApp.Views.Draft({model: draft}).render().el);
    });
    return this;
  }
});