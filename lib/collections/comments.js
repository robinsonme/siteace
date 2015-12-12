Comments = new Mongo.Collection('comments');

Comments.allow({
  insert: function (userId, doc) {
    if (userId) {
      return true;
    } else {
      return false;
    }
  },
});
