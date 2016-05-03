Template.questionSubmit.events({
  'submit .questionSubmitForm': function(event) {
    event.preventDefault();
    var question = event.target.question.value; // get question value
    // check if the value is empty
    if (question == "") {
      alert("Please enter a question.");
    } else if (question.length > 120) {
      alert("Please enter a max. 120 Characters")
    } else {
      Meteor.call('questionInsert', question);
      Router.go('questionListVotes');
    }
  }

});
