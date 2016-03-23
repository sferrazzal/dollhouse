$(document).ready(function() {
    console.log("js ready!");

    //create reference to item being dragged
    var draggeditem = null;
    
    //store mouse coordinates
    var mouse_x = 0;
    var mouse_y = 0;

    //store top and left coordinates of element
    var draggeditemtop = 0;
    var draggeditemleft = 0;

    $(document).mousemove = updateposition;

    function updateposition(f){
        console.log("the function ran!")
        var mouse_x = f.pageX
        var mouse_y = f.pageY
        console.log(mouse_x)
        console.log(mouse_y)
    }


    $(".doll").mousedown(function(e){
        //console.log("The one that got away!")
        //$(this).css('opacity',0)
        draggeditem = $(this)
        if(draggeditem != null){
            console.log(draggeditem)
            console.log(e.pageX)
        }
    });

    $(document).mouseup(function(){
        draggeditem = null
    });

    $(".doll").mouseup(function(){
        //console.log("...or is she?")
        //$(this).css('opacity',1)
    });

    $(document).click(function(){
       console.log(draggeditem)
       console.log(mouse_x)
    });


    

    function drag(){
        console.log("It works!")
    }
    
})
