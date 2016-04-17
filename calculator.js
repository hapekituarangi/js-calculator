var key = document.querySelectorAll(".wrapper td"); //Select all table cells for calculator buttons

var result;// for finding reuslt calculation 

	for(var i = 0; i < key.length; i++) {
		key[i].onclick = function(e) {//add onclick to all td
			console.log(e);
			var input = document.querySelector(".display td");//get the input
			var inputVal = input.innerHTML;
			var printInput = this.innerHTML;
			console.log(printInput);


			
			if(printInput === "CE"){// if press CE take the last number form screen
				input.innerHTML = input.innerHTML.slice(0, -1);
				
			}else if (printInput === "AC") {// if press AC erase everything
				input.innerHTML = "";
			}else if (printInput === "="){//if press = caculate and display
				result = inputVal;
				input.innerHTML = myEval(result);
			
       			;
        		}else{
				input.innerHTML += printInput;
      		}
			function myEval(inputValue)// for calculate square(x2)
			{//
				var n = inputValue.indexOf("√")//Find index of power
				//If n == -1 it means the opoerator is something else so the Eval function will take care of it in Else block.
				if (n > -1)
				{
					var number1 = inputValue.substring(0,n);
					var number2 =  inputValue.substring(n+1, inputValue.length);
					return Math.pow(number1, number2);
				}
			else
			{
			return eval(inputValue);
			}
			}


					}
				}

