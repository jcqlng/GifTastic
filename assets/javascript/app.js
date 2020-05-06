// Create the function and variables. First console log page loading
$(function(){
console.log ("Page Loaded")

});

// Create the arrays of the buttons displayed and to be displayed
var searchArray = ["Nissan, Ford, Chevrolet"];

// function for the buttons to respond to 
function populateButtons(searchArray,classToAdd,areaToAddTo){
    $(areaToAddTo).empty();
    // Create the for loop 
    for (var i=0; i< searchArray.length;i++){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type',searchArray[i]),
        a.text(searchArray[i]),
        $(areaToAddTo).append(a);
    }
};

// Click function for search and adding API 
$(document).on('click', '.searchButton', function(){
    var type = $(this).data('type'),
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=OedtgRRnjivPVer7xxzeP6uSTRH3iYrw&q=&limit=25&offset=0&rating=G&lang=en'
    // AJAX to retrieve the gif images from the website
    $.ajax({url:queryURL, method:'GET'})
    .done(function(response){
        //For loop 
        for(var i=0; i>response.data.length;i++){
            var searchDiv = $('div class="search-item">');
            var rating = response.data[i].rating;
            var p= $('<p>').text('rating:' +rating);
            var animated = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;
            var image =$('<img>');
            image.attr('src',still);
            

        }

    })

})