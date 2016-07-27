$(document).ready(function(){
    console.log("Document ready!");

  var dollSelectBox = document.getElementById("doll-select");
  var accessorySelectBox = document.getElementById("accessory-select");
  var focus = document.getElementById("focus");
  var accessory = new Image();
  var accessoryCreated = 0;
  var accessoryBox = document.getElementById("accessory-box");

  //Set and position doll image based on user selection 
  dollSelectBox.onchange=function(){
    if (dollSelectBox.selectedIndex != 0) {
      var selectedDollId = dollSelectBox.selectedIndex;
      var selectedDoll = $(".doll").find("[data-dollid='" + selectedDollId + "']")[0];
      focus.src = selectedDoll.src;
      focus.style.bottom = "0%";
    };
  };
  //Set and position accessory preview based on user selection
  $(window).load(function(){
      console.log("Window loaded!");
  accessorySelectBox.onchange=function(){
    if (accessorySelectBox.selectedIndex != 0) {
      selectedAccessoryPath = accessorySelectBox.options[accessorySelectBox.selectedIndex].value;
      if (accessoryCreated == 0) {
        accessory.src = selectedAccessoryPath;
        $( "#accessory-box" ).append(accessory);
        console.log("loop accessory height = " + accessory.clientHeight);
        console.log("loop accessory width = " + accessory.clientWidth);
        console.log("loop box height = " + accessoryBox.clientHeight);
        console.log("loop box width = " + accessoryBox.clientWidth);
        if (accessory.clientHeight > accessoryBox.clientHeight) {
            console.log("It's too big vertically!");
        };
        if (accessory.clientWidth > accessoryBox.clientWidth) {
            console.log("It's too big horizontally!");
        };
        accessoryCreated = 1;
      } else {
          accessory.src = selectedAccessoryPath;
        if (accessory.style.height > accessorySelectBox.style.height) {
            console.log("It's too big vertically!");
        };
        if (accessory.style.width > accessorySelectBox.style.width) {
            console.log("It's too big horizontally!");
        };
      };
      console.log("Height = " + accessory.clientHeight);
      console.log("Width = " + accessory.clientWidth);
    };
  };
  });
});
