MailApp.Routers.Mails = Backbone.Router.extend({
  routes:{
    '': 'mails',
    'mails': 'mails',
    'drafts': 'drafts',
    'mails/:id': 'showMail',
    'drafts/:id': 'showDraft',
    'contacts': 'contacts'
  },
  showView: function(selector, view) {
    if (this.currentView)
      this.currentView.close();

    $(selector).html(view.render().el);
    this.currentView = view;
    return view;
  },
  mails: function() {
    var mailList = new MailApp.Collections.MailList();
    mailList.fetch({
      success: function() {
        var mailbox = new MailApp.Views.Mailbox();
        mailbox.subView = new MailApp.Views.MailList({model: mailList});
        MailApp.app.showView('#main', mailbox);
      }
    });
  },
  drafts: function() {
    var mailList = new MailApp.Collections.DraftList();
    mailList.fetch({
      success: function() {
        var mailbox = new MailApp.Views.Mailbox();
        mailbox.subView = new MailApp.Views.DraftList({model: mailList});
        MailApp.app.showView('#main', mailbox);
      }
    });
  },
  showMail: function(id) {
    var mail = new MailApp.Models.Mail({id: id});
    mail.fetch({
      success: function() {
        var mailbox = new MailApp.Views.Mailbox();
        var mailView = new MailApp.Views.MailDetail({model: mail});
        mailbox.subView = mailView;
        MailApp.app.showView('#main', mailbox);
      }
    });
  },
  showDraft: function(id) {
    var draft = new MailApp.Models.Draft({id: id});
    draft.fetch({
      success: function() {
        var mailbox = new MailApp.Views.Mailbox();
        var draftView = new MailApp.Views.DraftDetail({model: draft});
        mailbox.subView = draftView;
        MailApp.app.showView('#main', mailbox);
      }
    });
  },
  contacts: function() {
    var contacts = new MailApp.Collections.ContactList();
    contacts.fetch({
      success: function() {
        var mailbox = new MailApp.Views.Mailbox();
        mailbox.subView = new MailApp.Views.ContactList({model: contacts});
        MailApp.app.showView('#main', mailbox);
      }
    });
  }
});