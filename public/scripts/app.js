var data = [];

function renderTweets(tweets) {
  // tweets.sort(function(a,b){
  //   if (a['created_at'] < b['created_at']){
  //     return 1
  //   } else {
  //     return -1
  //   }
  // })
  tweets.reverse();
  tweets.forEach( (tweet) => {
    $('#old-tweets').append(createTweetElement(tweet));
  })
}

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweet) {
  const userAvatar = tweet.user.avatars.small;
  const userName = tweet.user.name;
  const userHandle = tweet.user.handle;
  const oldTweet = tweet.content.text;
  const datePosted = new Date(tweet.created_at).toDateString();

  let html =
  `<article>
    <header>
      <img class="user-picture" src="${userAvatar}">
      <h3 class="username">${userName}</h3>
      <h6 class="user-handle">${userHandle}</h6>
    </header>
    <p id="tweets-container">${escape(oldTweet)}</p>
    <footer>
      ${datePosted}
      <div class="icons">
        <i class="fa fa-heart fa-lg"></i>
        <i class="fa fa-retweet fa-lg"></i>
        <i class="fa fa-flag fa-lg"></i>
      <div>
    </footer>
  </article>`

  return html;
}

$(document).ready(function() {
  const loadTweets = function (){
    $.ajax('http://localhost:8080/tweets', {
      method: "GET"
    }).done(function(res){
      $("#old-tweets").empty();
      renderTweets(res);
    });
  }
  loadTweets();
  // renderTweets(data);
  $('form').on('submit', function(event){
    event.preventDefault();
    var tweet = $(this).serialize();
    var actualText = $('textarea').val();

    if (tweet.slice(5) === '') {
      $('<h4>', {
        class: "no-message",
        text: "hello"
      }).appendTo(".new-tweet")
      // alert('Please enter a message in the tweet box!');
    } else if (actualText.length >= 141) {
      // alert('Your tweet is too long! The max character length is 140. Please remove some characters!');
    } else {
      $.ajax("/tweets", {
        method: "POST",
        data: tweet
      }).done(function(res){
        loadTweets();
        $("textarea").val("");
        $(".new-tweet form .counter").html("140");
      })
    }
  });
  $('button').on('click', function(event){
    $(".new-tweet").slideToggle();
    $("textarea").focus();
  });

});