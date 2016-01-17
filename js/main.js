$(document).ready(function() {

	function fizzbuzz(userVar) {
		var myVar = 1;
		var fizzbuzzArr = [];

		if (!$.isNumeric(userVar)) {
			msg = "Sorry, that's not a number. Reload and try again.";
			alert(msg);
			//return msg;
		}

		else if ((userVar % 1 != 0) || (userVar <= 0)) {
			msg = "We need a whole, positive number greater than 1. Relaod and try again.";
			alert(msg);
			//return msg;
		}

		else {

			while (myVar <= userVar) {

				if (myVar%3 == 0 && myVar%5 ==0) {
					fizzbuzzArr.push("FizzBuzz");
					myVar++;
				}

				else if (myVar%3 == 0) {
					fizzbuzzArr.push("Fizz");
					myVar++;
				}

				else if (myVar%5 == 0) {
					fizzbuzzArr.push("Buzz");
					myVar++;
				}

				else {
					fizzbuzzArr.push(myVar);
					myVar++;
				}

			}

			return fizzbuzzArr;
		}
	}


	userVar = prompt("How far shall we go?");
	newArr = fizzbuzz(userVar);

	for (x in newArr) {
		$("body").append(newArr[x] + "<br />");
	}

});