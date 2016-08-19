$(document).ready(function(){
    console.log("Document ready!");

  var dollSelectMenu = document.getElementById("doll-select");
  var dollPreviewMenu = document.getElementById("doll-picture-select");
  var newDollButton = document.getElementById("button-new-doll");
  var renameDollButton = document.getElementById("button-rename-doll");
  var accessoryPreviewMenu = document.getElementById("accessory-picture-select");
  var accessory = new Image();
  var doll = new Image();
  var dollPreview = new Image();
  var accessoryPreviewBox = document.getElementById("accessory-preview-box");
  var dollPreviewBox = document.getElementById("accessory-preview-box");
  var displayArea = document.getElementById("display-area");
  var previewedDoll = null;


  //get csrftoken
  function getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie != '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
              var cookie = jQuery.trim(cookies[i]);
              if (cookie.substring(0, name.length + 1) == (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  }

  var csrftoken = getCookie('csrftoken');

  function csrfSafeMethod(method) {
      //these HTTP methods do not require CSRF protection
      return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
  }

  $.ajaxSetup({
      beforeSend: function(xhr, settings) {
          if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
              xhr.setRequestHeader("X-CSRFTOKEN", csrftoken);
          }
      }
  });


  //Set and position doll image based on user selection 
  dollSelectMenu.onchange=function(){
    if (dollSelectMenu.selectedIndex != 0) {
      var selectedDollID = dollSelectMenu.selectedIndex;
      var workingDoll = $(".doll").find("[data-dollid='" + selectedDollID + "']")[0];
      if (doll.src == ""){
        doll.src = workingDoll.src;
        doll.id = "doll";
        $("#display-area").append(doll);
      } else {
          doll.src = workingDoll.src;
      };
    };
  };


  //Set and position doll preview based on user selection
  dollPreviewMenu.onchange=function(){
    if (dollPreviewMenu.selectedIndex != 0) {
      selectedDollPath = mediaUrl + dollPreviewMenu.options[dollPreviewMenu.selectedIndex].getAttribute('data-picture');
      console.log("selectedDollPath = " + selectedDollPath);
      console.log("selectedDollIndex = " + dollPreviewMenu.selectedIndex);
        if (dollPreview.src == "") {
          dollPreview.src = selectedDollPath;
          $(dollPreview).load(function() {
            $( "#doll-preview-box" ).append(dollPreview);
            if (dollPreview.clientHeight > dollPreviewBox.clientHeight) {
              console.log("Resizing vertically!");
              dollPreview.height = (dollPreviewBox.clientHeight - 10);
            };
            if (dollPreview.clientWidth > dollPreviewBox.clientWidth) {
              console.log("Resizing horizontally!");
              dollPreview.width = (dollPreviewBox.clientWidth - 10); 
            };
          });
     } else {
          dollPreview.src = selectedDollPath;
        if (dollPreview.clientHeight > dollPreviewBox.clientHeight) {
          console.log("Resizing vertically!");
          dollPreview.height = (dollPreviewBox.clientHeight - 10);
        };
        if (dollPreview.width > dollPreviewBox.clientWidth) {
          console.log("Resizing horizontally!");
          dollPreview.width = (dollPreviewBox.clientWidth- 10);
        };
      };
      console.log("Height = " + dollPreview.clientHeight);
      console.log("Width = " + dollPreview.clientWidth);
    };
  };

  //Set and position accessory preview based on user selection
  accessoryPreviewMenu.onchange=function(){
    if (accessoryPreviewMenu.selectedIndex != 0) {
      selectedAccessoryPath = accessoryPreviewMenu.options[accessoryPreviewMenu.selectedIndex].value;
        if (accessory.src == "") {
          accessory.src = selectedAccessoryPath;
          $(accessory).load(function() {
            $( "#accessory-preview-box" ).append(accessory);
            if (accessory.clientHeight > accessoryPreviewBox.clientHeight) {
              console.log("Resizing vertically!");
              accessory.height = (accessoryPreviewBox.clientHeight - 10);
            };
            if (accessory.clientWidth > accessoryPreviewBox.clientWidth) {
              console.log("Resizing horizontally!");
              accessory.width = (accessoryPreviewBox.clientWidth - 10); 
            };
          });
     } else {
          accessory.src = selectedAccessoryPath;
        if (accessory.clientHeight > accessoryPreviewBox.clientHeight) {
          console.log("Resizing vertically!");
          accessory.height = (accessoryPreviewBox.clientHeight - 10);
        };
        if (accessory.width > accessoryPreviewBox.clientWidth) {
          console.log("Resizing horizontally!");
          accessory.width = (accessoryPreviewBox.clientWidth- 10);
        };
      };
      console.log("Height = " + accessory.clientHeight);
      console.log("Width = " + accessory.clientWidth);
    };
  };

  //Create new doll from preview image
  newDollButton.onclick = function(){
    if (dollPreviewMenu.selectedIndex != 0) {
      var dollName = prompt('Please enter a name for the new doll:');
      $.ajax("Http://127.0.0.1:8000/dollhouse/doll/create", {
        type: 'POST',
        dataType: 'json',
        data: {
          dollName: dollName,
          dollImage: dollPreviewMenu.options[dollPreviewMenu.selectedIndex].getAttribute('data-picture'),
          workingDollhouse: workingDollhouse, 
        }
      })
      .done(function(response){
          console.log("The request is complete!");
      })
      .fail(function(response){
          console.log("Sorry, there was a problem!");
          console.log(response.responseText);
      });
    };
  };

  //Rename Doll
  renameDollButton.onclick = function(){
    if (dollSelectMenu.selectedIndex != 0) {
      var dollId = dollSelectMenu.selectedIndex;
      console.log(dollId);
      var dollName = prompt('Please enter a new name for this doll (page will be reloaded):');
      if (dollName != null) {
        // data will be set using setattr(); keys must be the model field name.
        $.ajax("Http://127.0.0.1:8000/dollhouse/doll/"+dollId,{
          type: 'POST',
          data: {
            doll_name: dollName,
          }
        });
        window.location.reload(true);
      }; 
    };
  };

  
  //    var dollname = prompt('Please enter a new name for this doll:');


});
