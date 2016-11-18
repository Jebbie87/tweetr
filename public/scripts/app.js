const renderTweets = function(tweets) {

  tweets.sort(function(a,b){
    if (a.created_at < b.created_at) {
      return 1;
    } else {
      return -1;
    };
  });

  tweets.forEach(function(tweet) {
    $('#old-tweets').append(createTweetElement(tweet));
  });
};

const escape = function(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const createTweetElement = function(tweet) {
  const userAvatar = tweet.user.avatars.small;
  const userName = tweet.user.name;
  const userHandle = tweet.user.handle;
  const oldTweet = tweet.content.text;
  const datePosted = new Date(tweet.created_at).toDateString();

  const html =
  `<article>
    <header>
      <img class="user-picture" src="${userAvatar}"">
      <h3 class="username">${userName}</h3>
      <h6 class="user-handle">${userHandle}</h6>
    </header>
    <p id="tweets-container">${escape(oldTweet)}</p>
    <footer>
      ${datePosted}
      <div class="icons'>
        <i class="fa fa-heart fa-lg"></i>
        <i class="fa fa-retweet fa-lg"></i>
        <i class="fa fa-flag fa-lg"></i>
      <div>
    </footer>
  </article>`;

  return html;
};

$(document).ready(function() {

const loadTweets = function() {
  $.ajax('http://localhost:8080/tweets', {
    method: 'GET',
  }).done( (res) => {
    $('#old-tweets').empty();
    renderTweets(res);
  });
};

const createTweet = function(tweet) {
  $.ajax('/tweets', {
    method: 'POST',
    data: tweet,
  }).done(function(res){
    loadTweets();
    $('textarea').val('');
    $('.new-tweet form .counter').html('140');
  });
};

loadTweets();

  $('form').on('submit', function(event) {
    event.preventDefault();
    const tweet = $(this).serialize();
    const actualText = $('textarea').val();

    if (actualText === '') {
      $('.error-message').html('').append("Please don't be empty");
    } else if (actualText.length >= 141) {
      $('.error-message').html('').append('This is wayyyyyyyy too long.');
    } else {
      createTweet(tweet);
    };
  });

  $('button').on('click', function(event) {
    $('.new-tweet').slideToggle();
    $('textarea').focus();
  });
});

