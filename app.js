//Make Js Code run after page is loaded
document.addEventListener('DOMContentLoaded', function() {
	//Creating the button and Text for the button
	let button = document.createElement('button');
	let btnText = document.createTextNode('Add Square');
    
    
    //assigning the 1st square a number
    let num = 1;  

	//Adding Text to the Button
	button.appendChild(btnText);

	//Adding button to the body of HTML
	document.body.appendChild(button);

	//Creating a container for squares the button creates and giving it a class
	let flexContainer = document.createElement('div');
	flexContainer.classList.add('flex-box');

	//Adding flex-box div to body of HTML
	document.body.appendChild(flexContainer);

	//function to create squares inside "flex-box" with Id named and incremented
	button.addEventListener('click', function() {
		let div = document.createElement('div');       //create the squares
		div.classList.add('square');                   //adding a class to each square
		div.id = num;                                  //using the variable num to name the id of each square
		div.innerHTML = num;                          //inserting the value of the id into each square



		//add listener for when each square is clicked
		div.addEventListener('click', function() {
			squareColor(div);    // change background color when each square is clicked
		});
        
        //add listener to check if Id/number is even or odd and delete appropriate square
		div.addEventListener('dblclick', function() {
			if (div.id % 2 === 0) {  //checking for even id/number withing square
				if (div.nextSibling !== null) { //checking to see if the square to right exists
					div.parentElement.removeChild(div.nextSibling); //deleting next square to right if it exists
				} else {
					alert("STOP CLICKING THE DANG BUTTON!!!!!"); //alert if square does not exist
				}
			} else {  //This considers the only other option for even/odd
				if (div.previousSibling !== null) {  //Checks if square to left exists
					div.parentElement.removeChild(div.previousSibling); //deletes if square exists
				} else {
					alert("STOP CLICKING THE DANG BUTTON!!!!"); //alerts if square does not exist
				}
			}
		});

		num++; //increment number 
		flexContainer.appendChild(div); //insert squares into flex-box
	});

	//create function to generate a random color
	function squareColor(element) {
		let rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb.push(Math.floor(Math.random() * 255));
		}
		element.style.backgroundColor = 'rgb(' + rgb.join(',') + ')';
	}
});
