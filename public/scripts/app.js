var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
  const tweetAppender = [];
  tweets.forEach( (tweet) => {
    $('#old-tweets').append(createTweetElement(tweet))
  })
}

function createTweetElement(tweet) {
  const userAvatar = tweet.user.avatars.small;
  const userName = tweet.user.name;
  const userHandle = tweet.user.handle;
  const oldTweet = tweet.content.text;
  const datePosted = tweet.created_at;

  let html =
  `<article>
      <header>
        <img class="user-picture" src="${userAvatar}">
        <h3 class="username">${userName}</h3>
        <h6 class="user-handle">${userHandle}</h6>
      </header>
      <p id="tweets-container">${oldTweet}</p>
      <footer>
        ${datePosted}
        <div class="icons">
          <i class="fa fa-heart fa-lg"></i>
          <i class="fa fa-retweet fa-lg"></i>
          <i class="fa fa-flag fa-lg"></i>
        <div>
       </footer>
  </article>`

  console.log(html)

  return html;
}

$(document).ready(function() {
  renderTweets(data);
});