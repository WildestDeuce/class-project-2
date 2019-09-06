$('.channel-button').on('click', function (event) {
  event.preventDefault();
  var name = $(this).attr('data-name');
  $('#submit-button').attr('data-name', name);
  $('.message-prompt').hide();
  $('#messages-h2').text('Messages in: ' + name);
  $('#messages-h2').show();



  $.get('/api/messages/' + name, function () {
  }).then(function (data) {
    console.log(data)

    $('.messages-holder').empty();

    for (var i = 0; i < data.length; i++) {
      var message = data[i].message
      console.log(message)
      var newDiv = $('<div>');
      newDiv.append(message);
      $('.messages-holder').append(newDiv);
    };
  });
});

$('#submit-button').on('click', function (event) {
  event.preventDefault();
  if ($('.message-input').val() === "") {
    alert('Enter a message')
  }
  else {
    var submitChannelName = $('#submit-button').attr('data-name');
    console.log(submitChannelName);
    console.log($(".message-input").val())
    if (submitChannelName === undefined) {
      alert('Please select a channel')
    }
    else {
      var messageData = {
        'channel_name': submitChannelName,
        'message': $(".message-input").val()
      };
  
      $.post('/api/messages', messageData, function () {
  
      }).then(function (data) {
        console.log(data)
        var message = data.message
        console.log(message)
        var newDiv = $('<div>');
        newDiv.append(message);
        $('.messages-holder').append(newDiv);
  
      });
    }
  }
});