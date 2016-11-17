const newTweet = function() {
  const tweetText = $(".new-tweet form textarea");
  const currentCharLength = $(".new-tweet form .counter")

  tweetText.on('keyup', function(event){
    let charLength = $(this).val().length;
    currentCharLength.html(140 - charLength);

    if (currentCharLength.html() < 0){
      currentCharLength.css( { 'color': 'red'} )
    } else {
      currentCharLength.css( { 'color': 'black'} )
    }
  });
};

$(newTweet);