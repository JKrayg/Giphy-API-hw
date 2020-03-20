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
    function addButtons() {
        $("#buttons").empty();

        for (var i = 0; i < gifArr.length; i++) {
            var btns = $("<button>");

            btns.addClass("giffy");
            btns.attr("data-name", gifArr[i]);
            btns.text(gifArr[i]);
            $("#buttons").append(btns);
        }
    }
    addButtons();


    //when a button is clicked gifs are shown
    
});