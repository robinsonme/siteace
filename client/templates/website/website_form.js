Template.website_form.events({
  "click .js-toggle-website-form":function(event){
    $("#website_form").toggle('slow');
  },
  "submit .js-save-website-form":function(event){
    event.preventDefault();
    // here is an example of how to get the url out of the form:
    var url = event.target.url.value;
    var title = event.target.title.value;
    var description = event.target.description.value;

    //  put your website saving code in here!
    Meteor.call("insert_website", url, title, description);
    $("#website_form").toggle('slow');
  }
});
