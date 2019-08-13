function alphabetValidation(event){
	//alert("event->"+e.charCode);
	 var e = window.event || event;
	 var key_uni_code = e.charCode || e.keyCode;
	 return (key_uni_code >= 65 && key_uni_code <= 122 || key_uni_code == 0 || key_uni_code == 32 ) ? true : false;

}

function phoneNoValidation(e){
	//alert("No -> "+e.charCode);
	var e = window.event || e;
	var no = e.charCode || e.keyCode;
	return (no >=48 && no <= 57 || no == 0 || no == 32) ? true : false;
}

function formValidate(){
	//alert("lol");
	var name_field = document.getElementById('name_id');
	var name_print = document.getElementById('name_span');
	if(document.online_Form.fname.value == ''){
		name_field.style.backgroundColor = "red";
		name_print.innerHTML = "Name Required!";
		name_field.onfocus = function(){
			name_field.style.backgroundColor = '';
			name_print.innerHTML = "";
		}
		return false;
	}
	if(document.online_Form.phone_no.value == ''){
		document.getElementById('phone_no_field').style.backgroundColor="red";
		document.getElementById('phone_span').innerHTML = "No Required!";
		document.getElementById('phone_no_field').onfocus = function(){
			document.getElementById('phone_no_field').style.backgroundColor = '';
			document.getElementById('phone_span').innerHTML = '';
		} 

		return false;
	}

	var city_field = document.getElementById('city_id');
	var city_span = document.getElementById('city_span');
	if(document.online_Form.city_name.value == ''){
		city_field.style.backgroundColor = "red";
		city_span.innerHTML = "city Required!";

		city_field.onfocus = function(){
			this.style.backgroundColor = '';
			city_span.innerHTML = '';
		}
		return false;
	}

	var add = document.getElementById('add_id');
	var add_span = document.getElementById('address_span');
	if(document.online_Form.address.value == ''){
		add.style.backgroundColor = "red";
		add_span.innerHTML = "address Required!";

		add.onfocus = function(){
			this.style.backgroundColor = '';
			add_span.innerHTML = '';
		}
		return false;
	}
	return(true);
}

function subscribe_validation(){
	var sub_email = document.getElementById('email_id');
	if(document.sub_form.email.value == ''){
		//alert("email Required");
		sub_email.style.backgroundColor = "red";
		sub_email.onfocus = function(){
			this.style.backgroundColor = '';
		}
		return false;
	}
	
	var sub_reg = document.getElementById('reg_id');
	if(document.sub_form.reg.value == ''){
		sub_reg.style.backgroundColor = "red";
		sub_reg.onfocus = function(){
			this.style.backgroundColor = '';
		}
		return false;
	}
	emailValidation();
	return(true);
}

function emailValidation(){
	var email_id = document.sub_form.email.value;
	atpos = email_id.indexOf("@");
	dotpos = email_id.lastIndexOf('.');
	if(atpos < 1 || (dotpos - atpos < 2)){
	//	document.getElementById('email_validation').style.backgroundColor ="red";
		alert("plz enter correct mail id");
		document.sub_form.email.focus();
		return false;
	}
	return (true);
}

// document.getElementById('submit_button_form').onclick = function(){
// 	var name = document.online_Form.fname.value;
// 	var mobile_no = document.online_Form.phone_no.value;
// 	var c = document.online_Form.city_name.value;
// 	var addr = document.online_Form.address.value;

// 	var myArr = {
// 		'name':name,
// 		'Mob-Id':mobile_no,
// 		'City':c,
// 		'Address': addr
// 	};

// 	for (i in myArr){
// 		document.write( i+ " -> "+ myArr[i]);
// 		document.write("<br>");
// 	}
// }