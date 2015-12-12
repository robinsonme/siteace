Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('websites'), Meteor.subscribe('comments')];
  }
});

Router.route("/", function() {
  this.render('navbar', {
    to: 'navbar'
  });
  this.render('website_form', {
    to: 'form'
  });
  this.render('website_list', {
    to: 'main'
  });
});

Router.route("/website/:_id", function() {
  this.render('navbar', {
    to: 'navbar'
  });
  this.render('website_single', {
    to: 'main',
    data: function() {
      return Websites.findOne({_id: this.params._id});
    }
  });
});
