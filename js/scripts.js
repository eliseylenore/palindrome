$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userWord = $("#user-input").val();
    var backwardsUser = userWord.split('');
    backwardsUser = backwardsUser.reverse();
    backwardsUser = backwardsUser.join('');
    if (userWord === backwardsUser) {
      $('#palindrome').show();
      $('#correct').text(userWord.charAt(0).toUpperCase() + userWord.slice(1) + (' ')
      + backwardsUser.slice(0, backwardsUser.length-1) +
      backwardsUser.charAt(backwardsUser.length-1).toUpperCase());
    } else {
      $('#not-palindrome').show();
      $('#incorrect').text(userWord);
    }
  });
});
