MailApp.Models.Mail = Backbone.Model.extend({
  url: function() {
    return 'mails/' + this.id;
  }
});

MailApp.Collections.MailList = Backbone.Collection.extend({
  model: MailApp.Models.Mail,
  url: '/mails'
});
