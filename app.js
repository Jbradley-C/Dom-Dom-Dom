//Make Js Code run after page is loaded
document.addEventListener("DOMContentLoaded", function(){
    //Creating the button and Text for the button
    let button = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    let num = 1
    
    //Adding Text to the Button
    button.appendChild(btnText);
    
    //Adding button to the body of HTML
    document.body.appendChild(button);

    //Creating a container for squares the button creates and giving it a class
    let flexContainer = document.createElement("div");
    flexContainer.classList.add("flex-box");

    //Adding flex-box div to body of HTML
    document.body.appendChild(flexContainer)

    //function to create squares inside "flex-box" with Id named and incremented
    button.addEventListener("click", function()  {
         let div = document.createElement("div");
         div.classList.add("square");
         div.id=num;
         div.innerHTML=num;
         num++
         flexContainer.appendChild(div);         
    })
    
    

    
    
    


    

















})