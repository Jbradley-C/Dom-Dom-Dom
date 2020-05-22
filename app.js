//Make Js Code run after page is loaded
document.addEventListener("DOMContentLoaded", function(){
    //Creating the button and Text for the button
    let button = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    
    //Creating a container for squares the button creates and giving it a class
    let flexContainer = document.createElement("div");
    flexContainer.classList.add("flex-box");

    //Adding flex-box div to body
    
    


    
    //Adding Text to the Button
    button.appendChild(btnText);

    //Adding button to the body of HTML
    document.body.appendChild(button);
















})