$(document).ready(function () {

    var gifArr = [];

    //get searchbar value and push to array
    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        var giphy = $("#gif-input").val().trim();
        gifArr.push(giphy);
        addButtons();
        $('#gif-input').val('');

    });

    //add array of buttons to html
});