$(document).ready(function(){

  var dollselectbox = document.getElementById('dollselect');
  var focus = document.getElementById('focus');

  dollselectbox.onchange=function(){
    if (dollselectbox.selectedIndex != 0) {
      var selecteddollid = dollselectbox.selectedIndex
      var selecteddoll = $(".doll").find("[data-dollid='" + selecteddollid + "']")[0]
      focus.src = selecteddoll.src
      focus.style.bottom = "0%"
    }
  };

})
