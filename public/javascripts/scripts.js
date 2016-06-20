"use strict"

window.onload = function() {

	document.getElementById('ltc').onclick=function() {
		inputField();
	};

	function inputField() {
		event.preventDefault();
		document.getElementById('ltc').innerHTML="Submit";
		document.getElementById('input-txt').classList.add('active');
		document.getElementById('input-txt').focus();
		document.getElementById('ltc').id="newltc";
	
		document.getElementById('newltc').onclick=function() {
			validateInput();
			
		};
		
		function validateInput() {
			event.preventDefault();
			var emailval = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/im;
			var email = document.getElementById('input-txt').value;
			var checkActive = document.getElementById('input-txt').classList.contains('active');
			if (checkActive) {
				if (emailval.test(email)) {
					alert("Congrats on taking this big step towards learning to code!\nWe will contact you soon!!");
					clearField();
					document.getElementById('newltc').innerHTML="Thank You!";
					document.getElementById('input-txt').classList.remove('active');
				} else {
					alert("Please enter a valid email address");
					clearField();
				}//inner if
			}//if checkActive

			function clearField() {
				document.getElementById('input-txt').value = " ";
				return false;
			}

		}//validateInput
	}//inputField
}//window.onload



	


	
