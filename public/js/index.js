// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#login").val();
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// //$submitBtn.on("click", handleFormSubmit);
// //$exampleList.on("click", ".delete", handleDeleteBtnClick);


$(document).ready(function () {
  // Getting references to our form and inputs
  var loginForm = $("form#username-form");
  var usernameInput = $("input#username-input");


  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      username: usernameInput.val().trim()
    };

    if (!userData.username) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.username);
    usernameInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username) {
    $.post("/api/login", {
      username: username
    }).then(function (data) {
      //window.location.replace(data);
      // If there's an error, log the error
    }).catch(function (err) {
      console.log(err);
    });
  }

});




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
