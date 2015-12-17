Template.website_item.helpers({
  "localTime": function(date) {
    if (date) {
      return moment(date).format('llll');
    }
  }
});

Template.website_item.events({
  "click .js-upvote":function(event){
    event.preventDefault(); // prevent the button from reloading the page
    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var website_id = this.__originalId;
    // put the code in here to add a vote to a website!
    Meteor.call("vote_website", website_id, "upVote");
  },
  "click .js-downvote":function(event){
    event.preventDefault(); // prevent the button from reloading the page
    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var website_id = this.__originalId;

    // put the code in here to remove a vote from a website!
    Meteor.call("vote_website", website_id, "downVote");
  }
});
