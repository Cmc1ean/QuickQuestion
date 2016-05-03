Questions = new Mongo.Collection('questions');



Router.route('/submit', {name: 'questionSubmit'});

Router.route('/login', {name: 'accounts'});

Router.route('/about', {name: 'about'});

Router.route('/chronological', {name: 'questionListChronological'});

Router.route('/votes', {name: 'questionListVotes'});

Router.route('/', {name: 'homepage'});
