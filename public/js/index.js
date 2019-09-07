$('.channel-button').on('click', function (event) {
  event.preventDefault();

  //gets the name attribute from the button being clicked
  var name = $(this).attr('data-name');
  //gives #submit-button that name attribute in order to post to the correct channel
  $('#submit-button').attr('data-name', name);

  $('.message-prompt').hide();

  $('#messages-h2').text('Messages in: ' + name);
  $('#messages-h2').show();


  $.get('/api/messages/' + name, function () {
  }).then(function (data) {
    $('.messages-holder').empty();
    //loops through data and appends each message to .messages-holder
    for (var i = 0; i < data.length; i++) {
      var message = data[i].message;

      var newDiv = $('<div>');
      newDiv.append(message);
      $('.messages-holder').append(newDiv);
    };
  });
});

$('#submit-button').on('click', function (event) {
  event.preventDefault();
  //verifies that .message-input is not empty, and puts an error messaage on screen if it is
  if ($('.message-input').val() === "") {
    $('.error-holder').empty();

    var noMessageError = $('<h1>');
    noMessageError.text('Please enter a message');
    $('.error-holder').append(noMessageError);
  }

  else {
    $('.error-holder').empty();

    var submitChannelName = $('#submit-button').attr('data-name');
    var noChannelError = $('<h1>');
    //verifies that a channel has been selected
    if (submitChannelName === undefined) {
      noChannelError.text('Please select a channel');

      $('.error-holder').append(noChannelError);
    }

    else {
      //sets up data to be posted
      var messageData = {
        'channel_name': submitChannelName,
        'message': $(".message-input").val().trim()
      };
      //posts the users input data
      $.post('/api/messages', messageData, function () {

      }).then(function (data) {



// $(document).ready(function () {
//   // Getting references to our form and inputs
//   var loginForm = $("form#username-form");
//   var usernameInput = $("input#username-input");


//   // When the form is submitted, we validate there's an email and password entered
//   loginForm.on("submit", function (event) {
//     event.preventDefault();
//     var userData = {
//       username: usernameInput.val().trim()
//     };

//     if (!userData.username) {
//       return;
//     }

//     // If we have an email and password we run the loginUser function and clear the form
//     loginUser(userData.username);
//     usernameInput.val("");
//   });

//   // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
//   function loginUser(username) {
//     $.post("/api/login", {
//       username: username
//     }).then(function (data) {
//       //window.location.replace(data);
//       // If there's an error, log the error
//     }).catch(function (err) {
//       console.log(err);
//     });
//   }

// });




// $('.channel-button').on('click', function (event) {
//   console.log($(this).attr('data-name'))
//   var name = $(this).attr('data-name')
//   event.preventDefault();
//   $.get('/api/messages/' + name, function () {
//   }).then(function (data) {
//     console.log(data)
//     for (var i = 0; i < data.length; i++) {
//       var message = data[i].message
//       console.log(message)
//       var newDiv = $('<div>');
//       newDiv.append(message);
//       $('.messages-holder').append(newDiv);
//     }
//   })
// });

        var message = data.message;
        var newDiv = $('<div>');
        newDiv.append(message);

        $('.messages-holder').append(newDiv);
        $('.message-input').val('')
      });
    }
  }
});

