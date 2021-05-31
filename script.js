var dateEl = $("#currentDay")

dateEl.text(moment().format('dddd, MMMM Do'))

var textareaEl = $("textarea")
var currentHour = moment().format('H');

// for each text area
$('textarea').each(function() {
    // grab its id
    var id = $(this).attr('id')
    // get that id from localstorage
    var userInput = localStorage.getItem(id);
    // display it as the textarea text
    $(this).text(userInput)
})

$( "button" ).click(function() {
    // jquery gets the button that was clicked
    var button = $(this);
    // get the textarea alement next to it
    var textarea = button.siblings("textarea");
    // grab the text the user typed
    var userInput = textarea.val();
    // grab the id of the textarea
    var id = textarea.attr("id");
    // save the text at the address of the id
    localStorage.setItem(id, userInput)
    console.log( "Handler for .click() called.", userInput );
  });

  
  for(i=0; i<textareaEl.length; i++){
    //$(textareaEl[i].id).text(localStorage.getItem(textareaEl[i].id))
    if(parseInt(textareaEl[i].id) < currentHour){
        //this is in past
        textareaEl[i].setAttribute("class", "col-10 past")
    }else if (parseInt(textareaEl[i].id) == currentHour){
        //this is present
        textareaEl[i].setAttribute("class", "col-10 present")
    }else {
        //this is future
        textareaEl[i].setAttribute("class", "col-10 future")
    }
}