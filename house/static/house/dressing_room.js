$(document).ready(function(){

  var dollselectbox = document.getElementById("doll-select");
  var focus = document.getElementById("focus");

  dollselectbox.onchange=function(){
    if (dollselectbox.selectedIndex != 0) {
      var selecteddollid = dollselectbox.selectedIndex;
      var selecteddoll = $(".doll").find("[data-dollid='" + selecteddollid + "']")[0];
      focus.src = selecteddoll.src;
      focus.style.bottom = "0%";
    }
  };

  var accessoryselectbox = document.getElementById("accessory-select");

  accessoryselectbox.onchange=function(){
    if (accessoryselectbox.selectedIndex != 0) {
        selectedaccessorypath = accessoryselectbox.options[accessoryselectbox.selectedIndex].value;
      console.log(selectedaccessorypath);
      focus.src = selectedaccessorypath;
    }
  }
          
});
