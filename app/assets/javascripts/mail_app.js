window.MailApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    this.app = new MailApp.Routers.Mails();
    Backbone.history.start();
  }
};

Backbone.View.prototype.close = function () {
  if (this.beforeClose) {
    this.beforeClose();
  }
  this.remove();
  this.unbind();
};


$(document).ready(function() {
  templateLoader.loadTemplates(['mailbox', 'mail', 'draft', 'mail_detail', 'draft_detail', 'contact'], function() {
    MailApp.init();
  });
});