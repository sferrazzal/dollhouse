$(document).ready(function() {
    console.log("js ready!");

    //get csrftoken
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                console.log(i);
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

    console.log(csrftoken);

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


//    function updateposition(f){
//        var mouse_x = f.pageX
//        var mouse_y = f.pageY
//       console.log(mouse_x)
//        console.log(mouse_y)
//    }

    $(document).mousemove(move);


    function move(e){
        mouse_x = e.pageX
        mouse_y = e.pageY
        if(draggeditem != null){
            console.log(draggeditem)
            console.log("left " + draggeditem.style.left)
            draggeditem.style.left = mouse_x - offset_x
            console.log("mouse_x - offset_x = " + mouse_x + " - " + offset_x + " = " + Number(mouse_x - offset_x))
            console.log("left " + draggeditem.style.left)
            console.log("top " + draggeditem.style.top)
            console.log("mouse_y - offset_y = " + mouse_y + " - " + offset_y + " = " + Number(mouse_y - offset_y))
            draggeditem.style.top = mouse_y - offset_y 
            console.log("mouse_y - offset_y = " + mouse_y + " - " + offset_y + " = " + Number(mouse_y - offset_y))
            console.log("top " + draggeditem.style.top)
        }
    };

    $(document).mouseup(function(){
        draggeditem = null
    });

    $(".doll").mousedown(function(){
        draggeditem = $(this).find("img").get(0)
        console.log(draggeditem)
        console.log("mouse x = " + mouse_x)
        console.log("mouse y = " + mouse_y)
        console.log("offset left = " + draggeditem.offsetLeft)
        console.log("offset top = " + draggeditem.offsetTop)
        offset_x = (Number(mouse_x) - Number(draggeditem.offsetLeft))
        offset_y = (Number(mouse_y) - Number(draggeditem.offsetTop))
        console.log("offset_x = " + offset_x)
        console.log("offset_y = " + offset_y)
    });

    $(document).click(function(){
       console.log(draggeditem)
       console.log(mouse_x)
       console.log(mouse_y)
    });
    
    function drag(){
        console.log("It works!")
    }
    
})
