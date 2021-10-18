var recommendedList = [];
var trendingList = [];
var newArrivalsList = [];
var searchResultsList = [];
var genreList = [];
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

    $.getJSON(genreListURL, function(result) {
        genreList = result.genres;
    });

});

function getCardObj(m) {

    var cardObj =
        " \
        <div class='col-sm-4 col-md-3 col-lg-2'>\
        <a href='individual.html?id=" + m.id + "'>\
            <div class='card' onclick=\"goToMovieHomePage(" + m.id + ")\">\
             <div class='img_con'>\
                 <img src='" + "https://image.tmdb.org/t/p/w500" + m.poster_path + " ' class='card-img-top' alt=''>\
                </div>\
                <div class='card-body'>\
                    <h5 class='card-title'>" + m.title + "</h5>\
                    <p class='card-text'><strong>Rating:</strong> " + m.vote_average + "</p>\
             </div>\
            </div>\</a>\
        </div>";

    return cardObj;
}

function displayString(ml) {

    var result = "";

    for (let x = 0; x < ml.length; x++) {
        result += getCardObj(ml[x]);
    }

    return result;
}

function goToMovieHomePage(movieId) {
    var homePage = "";

    const movieDetailUrl = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US"

    $.getJSON(movieDetailUrl, function(result) {
        homePage = result.homepage;

        var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
        window.open(homePage, "_blank");
    });
}

function search() {
    var searchVal = $("#searchtxt").val();

    const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US&query=" + searchVal + "&page=1&include_adult=false";
    console.log(searchUrl);
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

function checkDisplay() {
    var searchVal = $("#searchtxt").val();
    if (searchVal === "" && showSearchResults === true) {
        $("#nonsearchDisplay").show();
        $("#searchDisplay").hide();
    }
}