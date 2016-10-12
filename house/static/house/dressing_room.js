$(document).ready(function(){
    console.log("Document ready!");

  var dollSelectMenu = document.getElementById("doll-select");
  var dollPreviewMenu = document.getElementById("doll-picture-select");
  var newDollButton = document.getElementById("button-new-doll");
  var newAccessoryButton = document.getElementById("button-new-accessory");
  var renameDollButton = document.getElementById("button-rename-doll");
  var renameAccessoryButton = document.getElementById("button-rename-accessory");
  var accessoryPreviewMenu = document.getElementById("accessory-picture-select");
  var accessoryPreview = new Image();
  var doll = new Image();
  var dollPreview = new Image();
  var accessoryPreviewBox = document.getElementById("accessory-preview-box");
  var dollPreviewBox = document.getElementById("accessory-preview-box");
  var displayArea = document.getElementById("display-area");
  var previewedDoll = null;
  var $accessories = $("img[data-linkeddoll]");
  var workingDoll = null;



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

  //load accessory positions
  
  $accessories.each(function() {
    var workingaccessory = $(this)[0];
    var linkedDollId = workingaccessory.dataset.linkeddoll;
    var workingDoll = $("img[data-dollid='" + workingaccessory.dataset.linkeddoll + "']")[0];
    console.log(workingaccessory);
    console.log(workingDoll);
    var dollLeft= $(workingDoll).offset().left;
    var dollTop= $(workingDoll).offset().top;
    console.log("dollLeft = " + dollLeft);
    console.log("dollTop = " + dollTop);
    workingaccessory.style.left = Number(dollLeft) + Number(workingaccessory.dataset.leftoffset);
    workingaccessory.style.top = Number(dollTop) + Number(workingaccessory.dataset.topoffset);
    console.log("Left position equals dollLeft: " + dollLeft + " plus offset: " + workingaccessory.dataset.leftoffset + " that's: " + (dollLeft + workingaccessory.dataset.leftoffset));
    console.log("Top position equals dollTop: " + dollTop + " plus offset: " + workingaccessory.dataset.topoffset + " that's: " + (dollTop + workingaccessory.dataset.topoffset));
  });


  //Show doll image and linked accessories based on user selection
  dollSelectMenu.onchange=function(){
    if (dollSelectMenu.selectedIndex != 0) {
      $("img[data-dollid]").addClass("hide").removeClass("doll");
      $("img[data-linkeddoll]").addClass("hide").removeClass("accessory");
      var selectedDollID = dollSelectMenu.selectedIndex;
      workingDoll = $("[data-dollid~='" + selectedDollID + "']")[0];
      workingDoll.className = "doll";
      //set linked accessories to visible
      $("[data-linkeddoll~='" + selectedDollID + "']").addClass("accessory").removeClass("hide");
    } else {
      $("img[data-dollid]").addClass("hide").removeClass("doll");
      $("img[data-linkeddoll]").addClass("hide").removeClass("accessory");
      workingDoll = null;
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
      selectedAccessoryPath = mediaUrl + accessoryPreviewMenu.options[accessoryPreviewMenu.selectedIndex].value;
        if (accessoryPreview.src == "") {
          accessoryPreview.src = selectedAccessoryPath;
          $(accessoryPreview).load(function() {
            $( "#accessory-preview-box" ).append(accessoryPreview);
            if (accessoryPreview.clientHeight > accessoryPreviewBox.clientHeight) {
              console.log("Resizing vertically!");
              accessoryPreview.height = (accessoryPreviewBox.clientHeight - 10);
            };
            if (accessoryPreview.clientWidth > accessoryPreviewBox.clientWidth) {
              console.log("Resizing horizontally!");
              accessoryPreview.width = (accessoryPreviewBox.clientWidth - 10); 
            };
          });
     } else {
         accessoryPreview.src = selectedAccessoryPath;
       if (accessoryPreview.clientHeight > accessoryPreviewBox.clientHeight) {
         console.log("Resizing vertically!");
         accessoryPreview.height = (accessoryPreviewBox.clientHeight - 10);
       };
       if (accessoryPreview.width > accessoryPreviewBox.clientWidth) {
         console.log("Resizing horizontally!");
         accessoryPreview.width = (accessoryPreviewBox.clientWidth- 10);
       };
     };
      console.log("Height = " + accessoryPreview.clientHeight);
      console.log("Width = " + accessoryPreview.clientWidth);
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

  //Create new accessory from preview image
  newAccessoryButton.onclick = function(){
    if (accessoryPreviewMenu.selectedIndex != 0) {
      if (dollSelectMenu.selectedIndex != 0) {
      accessoryName = accessoryPreviewMenu.options[accessoryPreviewMenu.selectedIndex].text;
      accessoryImage = accessoryPreviewMenu.options[accessoryPreviewMenu.selectedIndex].value;
        doll = dollSelectMenu.options[dollSelectMenu.selectedIndex].value;
        console.log(doll);
        $.ajax("Http://127.0.0.1:8000/dollhouse/accessory/create", {
          type: 'POST',
          data: {
            accessoryName: accessoryName,
            accessoryImage: accessoryImage,
            doll: doll,
            workingDollhouse: workingDollhouse,
          }
        })
        .done(function(response){
          console.log("The request is complete!");
          alert("accessory created! Page will reload.");
        })
        .fail(function(jqXHR, textStatus, errorThrown){
          console.log("Sorry, there was a problem!");
          console.log("errorThrown=" + errorThrown);
          console.log("jqXHR=" + jqXHR);
          console.log("textStatus=" + textStatus);
        });
        window.location.reload(true);
      } else {
          alert("Please select a doll!");
      };
    } else {
        alert("Please select an accessory!");
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

  //Rename Accessory 
  renameAccessoryButton.onclick = function(){
    if (accessoryPreviewMenu.selectedIndex != 0) {
      var accessoryId = AccessoryPreviewMenu.selectedIndex;
      console.log(accessoryId);
      var name = prompt('Please enter a new name for this doll (page will be reloaded):');
      if (name != null) {
        // data will be set using setattr(); keys must be the model field name.
        $.ajax("Http://127.0.0.1:8000/dollhouse/accessory/"+accessoryId,{
          type: 'POST',
          data: {
            name: dollName,
          }
        });
        window.location.reload(true);
      }; 
    };
  };

  //
  //*DRAGGING SECTION*
  //


  //create reference to item being dragged
  var draggeditem = null;

  //store mouse coordinates
  var mouse_x = 0;
  var mouse_y = 0;

  //store top and left coordinates of element
  var draggeditem_x = 0;
  var draggeditem_y = 0;

  //store offset from mouse position to dragged item corner
  var offset_x = 0;
  var offset_y = 0;

  //update draggeditem on mouse move
  $(document).mousemove(move);
  function move(e){
        mouse_y = e.pageY
        mouse_x = e.pageX
      if(draggeditem != null){
        console.log(draggeditem);
        console.log("Mouse moved!")
        console.log("mouse_x = " + mouse_x);
        console.log("mouse_y = " + mouse_y);
        console.log("draggeditem.style.left = " + draggeditem.style.left);
        console.log("mouse_x - offset_x = " + (mouse_x - offset_x));
        draggeditem.style.left = ((mouse_x - offset_x) + "px");
        console.log("draggeditem.style.left = " + draggeditem.style.left);
        console.log("offset_x = " + offset_x)
        console.log("offset_y = " + offset_y)
        console.log("draggeditem.style.top = " + draggeditem.style.top);
        console.log("mouse_y - offset_y = " + (mouse_y - offset_y));
        draggeditem.style.top = ((mouse_y - offset_y) + "px");
        console.log("draggeditem.style.top = " + draggeditem.style.top);
      }
  };

  //on mouseup, post position of draggeditem to server and clear draggeditem
  $(document).mouseup(function(){
    if(draggeditem != null){
      var accessoryid = draggeditem.dataset.accessoryid
      var accessory_lpos = draggeditem.style.left
      var accessory_tpos = draggeditem.style.top
      console.log("POSTing with accid = " + accessoryid + ", acclpos = " + accessory_lpos + ", acctpos = " + accessory_tpos);
      //data will be set using setattr(); keys must be the model field name.
      $.ajax("http://127.0.0.1:8000/dollhouse/accessory/"+accessoryid, {
        type: 'POST',
        data: {
          accessory_lpos: accessory_lpos,
          accessory_tpos: accessory_tpos,
        }
      })
      .done(function(response){
        console.log("The request is complete!" );
        console.log(response);
      })
      .fail(function() {
        console.log("Sorry, there was a problem!");
      })
      draggeditem = null
    };
  });


  //set draggeditem on mousedown and set offsets
  $(".accessorycontainer").mousedown(function(){
    draggeditem = $(this)[0];
    console.log(draggeditem);
    offset_x = (Number(mouse_x) - Number(draggeditem.offsetLeft));
    offset_y = (Number(mouse_y) - Number(draggeditem.offsetTop));
  });

  //
  $(document).mouseup(function(){
    if(draggeditem != null){
      var linkedDollId = draggeditem.dataset.linkeddoll
      console.log("draggeditem.style.left = " + Number(draggeditem.style.left.slice(0, -2)));
      console.log("draggeditem.style.top= " + Number(draggeditem.style.top.slice(0, -2)));
      console.log("dragged item = " + draggeditem);
      console.log(linkedDollId);
      var dollLeft= $("img[data-dollid='" + linkedDollId + "']").offset().left;
      console.log(dollLeft);
      var dollTop= $("img[data-dollid='" + linkedDollId + "']").offset().top;
      console.log(dollTop);
      var accessoryOffsetLeft = (Number(dollLeft) - Number(draggeditem.style.left.slice(0, -2)));
      console.log("draggeditem.style.left = " + draggeditem.style.left);
      console.log("accessoryOffsetLeft = " + accessoryOffsetLeft);
      var accessoryOffsetTop = (Number(dollTop) - Number(draggeditem.style.top.slice(0, -2))); 
      console.log("draggeditem.style.top= " + draggeditem.style.top);
      console.log("accessoryOffsetTop = " + accessoryOffsetTop);
      draggeditem = null;
    };
  });


  $("#recycle-bin").mouseup(function(){
      console.log("Neato!")
  });

});
