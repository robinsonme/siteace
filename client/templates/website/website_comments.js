Template.comments.helpers({
  comment: function() {
    return Comments.find({websiteId: this._id});
  },
  "localTime": function(date) {
    if (date) {
      return moment(date).format('llll');
    }
  }
});

Template.addComment.events({
  "click .js-toggle-comment-form":function(event){
    $("#comment_form").toggle('slow');
  },"submit .js-save-comment-form":function(event){
    event.preventDefault();
    // getting the comment value
    var docId = this._id;
    var comment = event.target.comment.value;

    //  put your comment saving code in here!
    Meteor.call("insert_comment", docId, comment);
    $("#comment_form").toggle('slow');
  }
});
