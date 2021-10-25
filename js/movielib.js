var recommendedList = [];
var trendingList = [];
var newArrivalsList = [];
var searchResultsList = [];

var genreList = [];
var yearList = [];
var ratingList = [];
var showSearchResults = false;

var recommendedListDisplay = "";
var trendingListDisplay = "";
var newArrivalsListDisplay = "";
var searchResultsListDisplay = "";

$(document).ready(function() {

    $("#searchDisplay").hide();

    const recommendedUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US&sort_by=vote_average.desc&include_adult=false&page=1'
    const trendingUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US&page=1'
    const newArrivalsUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US&sort_by=release_date.desc&include_adult=false&page=1&primary_release_date.lte=2021-10-15'
    const genreListURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US";

    $.getJSON(recommendedUrl, function(result) {
        recommendedList = result.results;
        recommendedListDisplay = displayString(recommendedList);
        $(".recommendedrow").empty().append(recommendedListDisplay);
    });

    $.getJSON(trendingUrl, function(result) {
        trendingList = result.results;
        trendingListDisplay = displayString(trendingList);
        $(".trendingrow").empty().append(trendingListDisplay);
    });

    $.getJSON(newArrivalsUrl, function(result) {
        newArrivalsList = result.results;
        newArrivalsListDisplay = displayString(newArrivalsList);
        $(".newarrivalsrow").empty().append(newArrivalsListDisplay);
    });

    // get genre list via API and populate the select
    $.getJSON(genreListURL, function(result) {
        genreList = result.genres;

        // first add an "All" option large
        $('#genreSelect')
            .append($("<option></option>")
                .attr("value", -999)
                .text("All Genres"));

        for (let g = 0; g < genreList.length; g++) {
            $('#genreSelect')
                .append($("<option></option>")
                    .attr("value", genreList[g].id)
                    .text(genreList[g].name));
        };

        // first add an "All" option large
        $('#genreSelectmd')
            .append($("<option></option>")
                .attr("value", -999)
                .text("All Genres"));

        for (let g = 0; g < genreList.length; g++) {
            $('#genreSelectmd')
                .append($("<option></option>")
                    .attr("value", genreList[g].id)
                    .text(genreList[g].name));
        };

        // first add an "All" option large
        $('#genreSelectxs')
            .append($("<option></option>")
                .attr("value", -999)
                .text("All Genres"));

        for (let g = 0; g < genreList.length; g++) {
            $('#genreSelectxs')
                .append($("<option></option>")
                    .attr("value", genreList[g].id)
                    .text(genreList[g].name));
        };
    });

    // populate year list
    // get current year
    var d = new Date();
    var currentYear = d.getFullYear();

    for (let y = 1970; y <= currentYear; y++) {
        yearList.push(y);
    };

    $('#yearSelect')
        .append($("<option></option>")
            .attr("value", -999)
            .text("All Years"));

    for (let yy = 0; yy < yearList.length; yy++) {
        $('#yearSelect')
            .append($("<option></option>")
                .attr("value", yearList[yy])
                .text(yearList[yy]));
    };

    $('#yearSelectmd')
        .append($("<option></option>")
            .attr("value", -999)
            .text("All Years"));

    for (let yy = 0; yy < yearList.length; yy++) {
        $('#yearSelectmd')
            .append($("<option></option>")
                .attr("value", yearList[yy])
                .text(yearList[yy]));
    };

    $('#yearSelectxs')
        .append($("<option></option>")
            .attr("value", -999)
            .text("All Years"));

    for (let yy = 0; yy < yearList.length; yy++) {
        $('#yearSelectxs')
            .append($("<option></option>")
                .attr("value", yearList[yy])
                .text(yearList[yy]));
    };

    // populate ratings list
    for (let r = 0; r <= 10; r++) {
        ratingList.push(r);
    }

    $('#ratingSelect')
        .append($("<option></option>")
            .attr("value", -999)
            .text("All Ratings"));

    for (let rr = 0; rr < ratingList.length; rr++) {
        $('#ratingSelect')
            .append($("<option></option>")
                .attr("value", ratingList[rr])
                .text(ratingList[rr]));
    };

    $('#ratingSelectmd')
        .append($("<option></option>")
            .attr("value", -999)
            .text("All Ratings"));

    for (let rr = 0; rr < ratingList.length; rr++) {
        $('#ratingSelectmd')
            .append($("<option></option>")
                .attr("value", ratingList[rr])
                .text(ratingList[rr]));
    };

    $('#ratingSelectxs')
        .append($("<option></option>")
            .attr("value", -999)
            .text("All Ratings"));

    for (let rr = 0; rr < ratingList.length; rr++) {
        $('#ratingSelectxs')
            .append($("<option></option>")
                .attr("value", ratingList[rr])
                .text(ratingList[rr]));
    };

});

function getCardObj(m) {

    

    var cardObj =
        " \ <td class='col-sm-4 col-md-3 col-lg-2'>\
                <div class='card'\">\
                    <div class='img_con' style=\"cursor: pointer;\" onclick=\"goToMovieHomePage('" + m.id + "')\">\
                        <img src='" + "https://image.tmdb.org/t/p/w500" + m.poster_path + " ' class='card-img-top' alt=''>\
                    </div>\
                    <div class='card-body' style=\"cursor: pointer;\" onclick=\"goToMovieHomePage('" + m.id + "')\">\
                        <h5 class='card-title'>" + m.title + "</h5>\
                        <p class='card-text'><strong>Rating:</strong> " + m.vote_average + "</p>\
                    </div>\
                    <div class=\"card-footer d-flex align-items-center justify-content-center\">\
                        <button type=\"button\" class=\"btn btn-danger btn-rounded btn-icon addToList\" onclick=\"addWatchLater('" + m.id + "','" + m.title + "')\"> <i class=\"fa fa-plus\"></i> Watch Later</button>\
                    </div>\
                </div>\
            </td>\
        ";

    return cardObj;
}

function displayString(ml) {

    var result = "<div class=\"card-columns\"><table><tr>";

    for (let x = 0; x < ml.length; x++) {
        result += getCardObj(ml[x]);
    }

    result += "</tr></table></div>";

    return result;
}

function goToMovieHomePage(movieId) {
    var homePage = "";

    const movieDetailUrl = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US";

    $.getJSON(movieDetailUrl, function(result) {
        homePage = result.homepage;

        if (homePage !== "") {
            window.open(homePage, "_blank");
        }
    });
}
-
function search() {
    var searchVal = "";

    searchVal = $("#searchtxt").val();

    console.log(searchVal);

    const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US&query=" + searchVal + "&page=1&include_adult=false";
    if (searchVal === "") {
        $("#nonsearchDisplay").show();
        $("#searchDisplay").hide();
        alert("Please enter at least 1 character to search on");
        showSearchResults = false;
    } else {
        showSearchResults = true;
        $.getJSON(searchUrl, function(result) {
            searchResultsList = result.results;
            searchResultsListDisplay = displayString(searchResultsList);
            $("#nonsearchDisplay").hide();
            $("#searchDisplay").show();
            if (searchResultsList.lenght === 0) {
                searchResultsListDisplay = "No results found using \"" + searchVal + "\"";
            } else {
                $(".searchcardResults").empty().append(searchResultsListDisplay);
            }
        });
    }
}

function checkDisplay(inputbox) {
    var searchVal = "";

    if (inputbox === "lg") {
        searchVal = $("#searchtxt").val();
        $("#searchtxtmd").val(searchVal);
        $("#searchtxtxs").val(searchVal);
    }

    if (inputbox === "md") {
        searchVal = $("#searchtxtmd").val();
        $("#searchtxtlg").val(searchVal);
        $("#searchtxtxs").val(searchVal);
    }

    if (inputbox === "xs") {
        searchVal = $("#searchtxtcs").val();
        $("#searchtxtmd").val(searchVal);
        $("#searchtxtlg").val(searchVal);
    }

    if (searchVal === "" && showSearchResults === true) {
        $("#nonsearchDisplay").show();
        $("#searchDisplay").hide();
    }
}

function filterChanged() {

    var genreFilterValue = $('#genreSelect option:selected').val();;
    var yearFilterValue = $('#yearSelect option:selected').val();;
    var ratingFilterValue = $('#ratingSelect option:selected').val();

    var filteredRecommended = [];
    var filteredTrending = [];
    var filteredNewArrivals = [];

    if (genreFilterValue === "-999" && yearFilterValue === "-999" && ratingFilterValue === "-999") {
        // no filter applied
        recommendedListDisplay = displayString(recommendedList);
        $(".recommendedrow").empty().append(recommendedListDisplay);

        trendingListDisplay = displayString(trendingList);
        $(".trendingrow").empty().append(trendingListDisplay);

        newArrivalsListDisplay = displayString(newArrivalsList);
        $(".newarrivalsrow").empty().append(newArrivalsListDisplay);
    } else {
        // at least 1 filter applied
        for (let r = 0; r < recommendedList.length; r++) {
            if (filterIncludeItem(recommendedList[r], genreFilterValue, yearFilterValue, ratingFilterValue)) {
                filteredRecommended.push(recommendedList[r]);
            }
        }

        for (let t = 0; t < trendingList.length; t++) {
            if (filterIncludeItem(trendingList[t], genreFilterValue, yearFilterValue, ratingFilterValue)) {
                filteredTrending.push(trendingList[t]);
            }
        }

        for (let n = 0; n < newArrivalsList.length; n++) {
            if (filterIncludeItem(newArrivalsList[n], genreFilterValue, yearFilterValue, ratingFilterValue)) {
                filteredNewArrivals.push(newArrivalsList[n]);
            }
        }

        recommendedListDisplay = displayString(filteredRecommended);
        $(".recommendedrow").empty().append(recommendedListDisplay);

        trendingListDisplay = displayString(filteredTrending);
        $(".trendingrow").empty().append(trendingListDisplay);

        newArrivalsListDisplay = displayString(filteredNewArrivals);
        $(".newarrivalsrow").empty().append(newArrivalsListDisplay);
    }
}

function filterIncludeItem(i, genreFilterValue, yearFilterValue, ratingFilterValue) {
    var includeItem = false;

    var includeGenre = false;
    var includeYear = false;
    var includeRating = false;

    if (genreFilterValue === "-999" || containsGenre(genreFilterValue, i.genre_ids)) {
        includeGenre = true
    }

    if (yearFilterValue === "-999" || i.release_date.substring(0, 4) === yearFilterValue.toString()) {
        includeYear = true
    }

    if (ratingFilterValue === "-999" || Math.floor(i.vote_average).toString() === ratingFilterValue.toString()) {
        includeRating = true
    }

    if (includeGenre && includeYear && includeRating) {
        includeItem = true;
    }

    return includeItem;
}

function containsGenre(genreFilterValue, movieGenreList) {
    var isGenre = false;

    for (let i = 0; i < movieGenreList.length; i++) {
        if (genreFilterValue.toString() === movieGenreList[i].toString()) {
            isGenre = true;
        }
    }

    return isGenre;
}

function addWatchLater(id, title) {
    alert("Id " + id + " - " + title + " added to the watch later list");
}

function showMenuItems() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}