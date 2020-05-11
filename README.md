# GifTastic
GIPHY API to make a dynamic web page that populates with gifs of TV Shows. GIPHY API, JavaScript, and jQuery to change the HTML of the site.

# Description 
Link to site: https://jcqlng.github.io/GifTastic/.

### Instructions

1. Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
   * We chose animals for our theme, but you can make a list to your own liking.

2. Your app should take the topics in this array and create buttons in your HTML.
   * Try using a loop that appends a button for each string in the array.

3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

5. Under every gif, display its rating (PG, G, so on).
   * This data is provided by the GIPHY API.
   * Only once you get images displaying with button presses should you move on to the next step.

6. Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

7. Deploy your assignment to Github Pages.

# Authors and Acknowledgements
Jackie Geiger - Myself for putting this together with the help of class materials and google search 
* For ajax - https://api.jquery.com/jquery.ajax/; https://medium.com/coding-design/writing-better-ajax-8ee4a7fb95f; https://www.w3schools.com/jquery/jquery_ajax_get_post.asp ; https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_filters_anything; 
* For Giphy API - https://support.giphy.com/hc/en-us/articles/360020283431-Request-A-GIPHY-API-Key
* For help on pausing giphy - https://codepen.io/hoanghals/pen/dZrWLZ
* Help on over all code - https://codepen.io/castlemaninc/pen/PQZRvW