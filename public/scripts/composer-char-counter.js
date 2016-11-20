$(document).ready(function() {

  const tweetText = $('.new-tweet textarea');
  const currentCharLength = $('.counter');

    tweetText.on('keyup', function(event) {
      const charLength = $(this).val().length;
      currentCharLength.html(140 - charLength);

      if (currentCharLength.html() < 0){
        currentCharLength.css( { 'color': 'red'} );
      } else {
        currentCharLength.css( { 'color': 'black'} );
      };

    });
});