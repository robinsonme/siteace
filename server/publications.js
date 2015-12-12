Meteor.publish('websites', function(){
  return Websites.find({});
});

Meteor.publish('comments', function(){
  return Comments.find({});
});
