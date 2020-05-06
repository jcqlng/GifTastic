$(function(){
    populateButtons(searchArray,'searchButton','#buttonArea');
    console.log("Page Loaded");
})
// Create the arrays of the buttons displayed and to be displayed
var searchArray = ['Nissan', 'Ford', 'Chevrolet'];

// function for the buttons to be displayed
function populateButtons(searchArray,classToAdd,areaToAddTo){
    $(areaToAddTo).empty();
    // Create the for loop 
    for (var i=0; i< searchArray.length;i++){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type',searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
};

// Click function for search and adding API 
$(document).on('click', '.searchButton', function(){
    $('#searches').empty();
    var type = $(this).data('type');
    var queryURL = `http://api.giphy.com/v1/gifs/search?q='+type+'api_key=t8ncg1WYhNc3YO2YPjIBCWOtjLV9bxlt&q=vehicles&limit=10&offset=0&rating=PG&lang=en`;
    // AJAX to retrieve the gif images from the website
    $.ajax({url:queryURL, method:'GET'})
    .done(function(response){
        //For loop 
        for(var i=0; i<response.data.length;i++){
            var searchDiv = $('<div class="search-item">');
            var rating = response.data[i].rating;
            var p= $('<p>').text('Rating: ' +rating);
            var animated = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;
            var image = $('<img>');
            image.attr('src',still);
            image.attr('data-still',still);
            image.attr('data-animated',animated);
            image.attr('data-state','still');
            image.addClass('searchImage');
            searchDiv.append(p);
            searchDiv.append(image);
            $('#searches').append(searchDiv);
        }
    })
})

// functions for the searchImage when clicked
$(document).on('click', '.searchImage', function(){
    var state = $(this).data('state');
    //if else statement when the search image is clicked to add still or animated images
    if(state == 'still'){
        $(this).attr('src', $(this).data('animated'));
        $(this).attr('data-state', 'animated');
    } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
})

// function for the search to be added at the top with buttons
$('#addSearch').on('click', function(){
  var newSearch = $('input').eq(0).val();
  searchArray.push(newSearch);
  populateButtons(searchArray, 'searchButton', '#buttonsArea');
  return false;  
})