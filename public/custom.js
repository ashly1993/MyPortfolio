
var left_value = 0;
var top_value = 0;

function _handleKeyAction(action) {
    if (action == 37) {
        //move left
        left_value = left_value - 10;
        $('#mario').css("left", left_value)
    }
    else if (action == 39) {
        //move right
        left_value = left_value + 10;
        $('#mario').css("left", left_value)
    }
    else if (action == 38) {
        //move top
        top_value = top_value - 10;
        $('#mario').css("top", top_value)
    }
    else if (action == 40) {
        //move down
        top_value = top_value + 10;
        $('#mario').css("top", top_value)
    }
}

$(document).ready(function () {




    $(document).keydown(function (e) {
        var action = e.keyCode;
        _handleKeyAction(action);
    })

    $('#btn_left').click(function () {
        _handleKeyAction(37);
    })
    $('#btn_right').click(function () {
        _handleKeyAction(39);
    })
    $('#btn_up').click(function () {
        _handleKeyAction(38);
    })
    $('#btn_down').click(function () {
        _handleKeyAction(40);
    })

});

