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
}

// Click function for search and adding API 
$(document).on('click', '.searchButton', function(){

})