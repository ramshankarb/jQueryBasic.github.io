$(document).ready(() => {
    //handling focus
    $("input").focus(function () {
        $(this).addClass("colored-border")
    });
    $("input").focusout(function () {
        $(this).removeClass("colored-border")
    });
    $("form").submit(function(event) {
        event.preventDefault();
        alert("User searched a item")
    })
})