//See if the input box is left empty
function isEmpty(boxValue)
	{ return  $.trim(boxValue).length== 0; }



$(document).ready(function(){

	$(":submit").click(function(){
		var boxValue = new Array(14);

		boxValue[0] = $('#firstName').val();
//		boxValue[1] = $('#lastName').val();
//		boxValue[2] = $('#middleName').val();
//		boxValue[3] = $('#address').val();
//		boxValue[4] = $('#city').val();
//		boxValue[5] = $('#state').val();
//		boxValue[6] = $('#zipcode').val();
//		boxValue[7] = $('#primaryPhone').val();
//		boxValue[8] = $('#email').val();
//		boxValue[9] =$('[name="gender"]:checked').val();
//		boxValue[10] = $('#month').val() +"/"+ $('#day').val() +"/"+ $('#year').val();
//		boxValue[11] = $('#medicalCondition').val();
//		boxValue[12] =$('[name="experianceLevel"]:checked').val();
//		boxValue[13] =$('[name="ageGroup"]:checked').val();
		
		alert(isEmpty(boxValue[0]));
		
		
		
		
		alert("First Name: " + boxValue[0]);
//		alert("Last Name: " +boxValue[1]);
//		alert("Middle Name: " +boxValue[2]);
//		alert("Address: " +boxValue[3]);
//		alert("City: " +boxValue[4]);
//		alert("State: " +boxValue[5]);
//		alert("Zipcode: " +boxValue[6]);
//		alert("Primary Phone: " +boxValue[7]);
//		alert("Email: " +boxValue[8]);
//		alert("Gender: " +boxValue[9]);
//		alert("Date of Birth: " +boxValue[10]);
//		alert("Medical Condition: " +boxValue[11]);
//		alert("Experiance Level: " +boxValue[12]);
//		alert("Age Group: " +boxValue[13]);

	
	});

});
