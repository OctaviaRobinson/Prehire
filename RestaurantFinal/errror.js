function printError() {
	
	else if (document.getElementById("inputName").value=""){
		alert("Please insert your Name");
	}
	
	else if (document.getElementById("inputEmail").value=""){
		alert("Please insert your Email Address");
	}
	
	else if (document.getElementById("inputPhone").value=""){
		alert("Please insert Phone Number");
	}
	
	else if (document.getElementById("formSelect").value=""){
		alert("Please select your reason for inquiry");
	}
	
	else if (document.getElementById("formTextArea").value=""){
		alert("Please give us more information");
	}
	
	else if (document.getElementById("formGroup").value=""){
		alert("Have you ever been to one of our resaurants?");
	}
	
	else if (document.getElementById("inlineCheckbox").value=""){
		alert("When is the best day to contact you?");
	}
	
	else  {
		alert("Your form is now complete. Please allow 365-750 days for consideration")
	
	}
}