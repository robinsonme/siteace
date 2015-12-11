Router.configure({
  layoutTemplate: 'layout'
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
