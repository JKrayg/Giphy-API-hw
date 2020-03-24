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
    $(document).on("click", "button", function () {
        $("#gif-display").empty();
        var searchInput = $(this).attr("data-name");
        console.log(searchInput);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api_key=qE3toOPLlKyvaP7cKfH48gvTjZdzU6sj&limit=10"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data
            console.log(results);

            for (var i = 0; i < results.length; i++) {
                var rating = results[i].rating;
                var gifDiv = $("<div>");
                var gifRating = $("<p>").text("Rating: " + rating);
                var gifImage = $("<img>");

                gifImage.attr("src", results[i].images.fixed_height_still.url);
                gifImage.attr('data-still', results[i].images.fixed_height_still.url);
                gifImage.attr('data-animate', results[i].images.fixed_height.url);
                gifImage.attr('data-state', 'still');
                gifImage.addClass('giff')
                gifDiv.append(gifImage);
                gifDiv.append(gifRating);
                $("#gif-display").prepend(gifDiv);

            }

            //still/animate gifs
            $(".giff").on("click", function () {
                var state = $(this).attr("data-state");

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });

        });
    });
});