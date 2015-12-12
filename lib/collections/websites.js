Websites = new Mongo.Collection("websites");

WebsitesIndex = new EasySearch.Index({
  collection: Websites,
  fields: ['title', 'description'],
  engine: new EasySearch.Minimongo()
});

Websites.allow({
  insert: function (userId, doc) {
    if (userId) {
      return true;
    } else {
      return false;
    }
  },
  update: function (userId, doc, fieldNames, modifier) {
    if (userId) {
      if(fieldNames === "upVote" || fieldNames === "downVote") {
        return true;
      }
    } else {
      return false;
    }
  }
});
