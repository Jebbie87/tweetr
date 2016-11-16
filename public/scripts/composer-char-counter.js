const newTweet = function() {
  const tweetText = $(".new-tweet form textarea");

  tweetText.on('keyup', function(event){
    let charLength = $(this).val().length;
    $(".new-tweet form .counter")[0].innerHTML = 140 - charLength;

    if ($(".new-tweet form .counter")[0].innerHTML < 0){
      $(".new-tweet form .counter").css( { 'color': 'red'} )
    };
  });

  tweetText.on('keydown', function(event) {
    if ($(".new-tweet form .counter")[0].innerHTML >= 0){
      $(".new-tweet form .counter").css( { 'color': 'black'} )
    } else if ((event.key === "Backspace")) {
      $(".new-tweet form .counter")[0].innerHTML++;
    };
  });
};

$(newTweet);