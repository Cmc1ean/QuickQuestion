Template.questionItem.events({
  'click' :function() {
  Session.set('selected_question', this._id);
},

  'click .upvoteIcon':function() {
    if(Meteor.user()) {
      var postId = Questions.findOne({_id:this._id})
      if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
        var questionId = Session.get('selected_question');
        Questions.update(questionId, {$inc: { score : -1}});
        Questions.update(questionId, {$pull: {voted : Meteor.userId()}});

      } else {
        var questionId = Session.get('selected_question');
        Questions.update(questionId, {$inc: { score : 1 }});
        Questions.update(questionId, {$addToSet: {voted : Meteor.userId()}});

      }
   }
},

  'click #deleteButton':function() {
    var result=confirm("Are you sure you want to delete this question?");
    if(result) {
    var questionId = Session.get('selected_question');
    Questions.remove({_id:this._id});
    }
  }

});
