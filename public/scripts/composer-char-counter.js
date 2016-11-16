const newTweet = function() {
  const tweetText = $(".new-tweet form textarea");
  const currentCharLength = $(".new-tweet form .counter")

  tweetText.on('keyup', function(event){
    let charLength = $(this).val().length;
    currentCharLength.text(140 - charLength);
    if (currentCharLength.html() < 0){
      currentCharLength.css( { 'color': 'red'} )
    };
  });

  tweetText.on('keydown', function(event) {
    if (currentCharLength.text() >= 0){
      currentCharLength.css( { 'color': 'black'} )
    } else if ((event.key === "Backspace")) {
      currentCharLength.text()++;
    };
  });

};

$(newTweet);