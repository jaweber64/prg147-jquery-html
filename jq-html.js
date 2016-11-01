/**
 * Created by jaWeber on 10/30/16.
 */
$(document).ready(function() {
    "use strict";

    var shoppingActive = true;

    $("#button").css("cursor","pointer");           // set the button and list item pointer to cursor
    $(".list").css("cursor","pointer");             //   because they can both be clicked on.
    $("h2").css("cursor","pointer");

    // ****************************************************************
    function setTextHover(prod) {
        $(prod).hover(function () {
                $(prod).css("text-shadow", "2px 2px 4px grey");
            },
            function () {
                $(prod).css("text-shadow", "none");
            }
        )
    }
    setTextHover("#shopping");
    setTextHover("#todo");

    $("#button").click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        if(shoppingActive) {
            $("#shopping-list").append('<div class="item">&#9634 ' + toAdd + '</div>');
        } else {
            $("#todo-list").append('<div class="item">&#9634 ' + toAdd + '</div>');
        }
        $('#item').val('');                         // clear input field !!!
    });

    $("#shopping").click(function() {               //  move underline to appropriate list
        $("#shopping").addClass("bottom-border");
        $("#todo").removeClass("bottom-border");
        shoppingActive = true;
        $('#todo-list').hide();
        $('#shopping-list').show();
    });

    $("#todo").click(function() {
        $("#todo").addClass("bottom-border");
        $("#shopping").removeClass("bottom-border");
        shoppingActive = false;
        $('#shopping-list').hide();
        $('#todo-list').show();
    });

    $(document).on('click', '.item', function() {   // remove item from appropriate list
        $(this).remove();
    });
});