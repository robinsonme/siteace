Session.set('websiteLimit', 5);
// inifiniscroll
var lastScrollTop = 0;
$(window).scroll(function(event){
  // are we near the bottom of window
  if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    // where in the page are we
    var scrollTop = $(this).scrollTop();

    // test if going down
    if (scrollTop > lastScrollTop) {
      Session.set('websiteLimit', Session.get('websiteLimit')+5);
    }
    lastScrollTop = scrollTop;
  }
});


// helper function that returns all available websites
Template.website_list.helpers({
  websites:function(){
    return Websites.find({}, {sort: {upVote: -1}, limit: Session.get('websiteLimit')});
  }
});
