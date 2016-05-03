
Meteor.methods({
  questionInsert: function(question) {
    var currentUserId = Meteor.userId();
    var postId = Questions.insert({
      question : question,
      score : 0,
      submitted : "Asked at " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
      createdBy : currentUserId,

    });
  }


});
