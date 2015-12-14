
// helper function that returns all available websites
Template.website_list.helpers({
  websites:function(){
    return Websites.find({}, {sort: {upVote: -1}});
  },
  websitesIndex: function () {
    return WebsitesIndex;
  }
});
