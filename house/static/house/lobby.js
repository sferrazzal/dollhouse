$(document).ready(function(){

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

    $("#create-dollhouse").click(function() {
        var newDollhouseName = prompt("Please enter a name for the new dollhouse");
        if(newDollhouseName != null) {
            $.ajax("http://127.0.0.1:8000/dollhouse/dollhousecreate/", {
                type: 'POST',
                data: {dollhouse_name: newDollhouseName
                }
            })
            .done(function(response) {
                console.log("The request is complete!");
                console.log(response);
                window.location.reload(true);
            })
            .fail(function() {
                console.log("Sorry, there was a problem!");
            })
        };
    });


});
