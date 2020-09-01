$(function(){
    populateButtons(searchArray,'searchButton','#buttonsArea');
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
$(document).on('click', '.searchButton', function(sender){
    $('#searches').empty();
    var type = $(this).data('type');
    
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=t8ncg1WYhNc3YO2YPjIBCWOtjLV9bxlt&q='+type+'&limit=25&offset=0&rating=G&lang=en';   
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
$(document).on('click', '.showImage',  function() {

    var state = $(this).data('state');
    //If the clicked image's state is still, update its src attribute to what its data-animate value is
    if (state == "still") {
        console.log("still image works");
     // Then, set the image's data-state to animate
        $(this).attr('src', $(this).data('animate'))
               .data('state', 'animate');
    } else {
    //  else set src to the data-still value
        console.log("animated image works");
        $(this).attr('src', $(this).data('still'))
               .data('state', 'still');               
    }

});

// function for the search to be added at the top with buttons
$('#addSearch').on('click', function(){
  var newSearch = $('input').eq(0).val();
  searchArray.push(newSearch);
  populateButtons(searchArray, 'searchButton', '#buttonsArea');
  return false;  
});