var key = document.querySelectorAll(".wrapper td"); //Select all table cells for calculator buttons
var result;
var findResult;
	for(var i = 0; i < key.length; i++) {
		key[i].onclick = function(e) {
			console.log(e);
			var input = document.querySelector(".display td"); //select table row, make calculator data display area
			var inputVal = input.innerHTML; //fetch button input data
			var printInput = this.innerHTML; //print button input data in calculator display area
			console.log(printInput); //print button input data to console log for testing purposes


			
			if(printInput === "CE"){ //if "CE" button clicked, remove last character added to display area , or first character to the right of display area
				input.innerHTML = input.innerHTML.slice(0, -1);
				$(".textbox");
			}else if (printInput === "AC") { //if "AC" button clicked, clear all data in display area
				input.innerHTML = "";
			}else if (printInput === "="){ //if "=" button clicked, solve equation, clear current displayed data then replace with solved data
				result = input.innerHTML;
				input.innerHTML = eval(result);
			}else{
			input.innerHTML += printInput; }
		}
	}

