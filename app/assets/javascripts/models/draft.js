MailApp.Models.Draft = Backbone.Model.extend({
  url: function() {
    return 'drafts/' + this.id;
  }
});

MailApp.Collections.DraftList = Backbone.Collection.extend({
  model: MailApp.Models.Draft,
  url: '/drafts'
});
