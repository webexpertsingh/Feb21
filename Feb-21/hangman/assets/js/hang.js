var compGuess = ["ohio","georgia","texas","california","florida"];

var wins;
//alert(compGuess);
var rand = compGuess[Math.floor(Math.random() * compGuess.length)];

console.log(rand);

var count = rand.length;

console.log(count);

var listOfChars = rand.split('');



//console.log(words);
//var html = "<div>_ </div>";
//document.getElementById("spaces").innerHTML = "html thing";
// for(var i=0;i<words.length;i++){
	
// }
document.onkeyup = function(event) {

//         // Determine which key was pressed
        var userGuess = event.key;
        document.getElementById("guessedWords").innerHTML += userGuess+",";

        for(var i=0;i<listOfChars.length;i++){
        	//document.getElementById("spaces").innerHTML += "_ ";
        //console.log("inside loop");
		//console.log(words[i]);
		//console.log(userGuess);
		var html = userGuess;
		var space = "_ ";
		if(userGuess == listOfChars[i]){
			//console.log("inside if");
			
			var test = document.getElementById("spaces").innerHTML += html;
						
		}else {
			document.getElementById("spaces").innerHTML += space;
		}
		html = "";
		space = "";
}
}


// 	document.onkeyup = function(event) {

//         // Determine which key was pressed
//         var userGuess = event.key;
//         console.log(userGuess);
//         console.log(words[i]);
//         if(userGuess == words[i]){
//         	document.getElementById("spaces").innerHTML += userGuess;
//         }else {
//         	document.getElementById("spaces").innerHTML += "_ ";
//         }
// }
// 	//document.getElementById("spaces").innerHTML += "_ ";
// }

// document.onkeyup = function(event) {

//         // Determine which key was pressed
//         var userGuess = event.key;
//         console.log(userGuess);
// }



	