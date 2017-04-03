function validateForm(){
	var name = document.getElementById("name"),
		lastname = document.getElementById("lastname"),
		email = document.getElementById("input-email"),
		password = document.getElementById("input-password"),
		select = document.getElementById("select"),  //.selectedIndex;
		social = document.getElementById("input-social");
	var span0 = document.getElementById("wrong0"),
		span1 = document.getElementById("wrong1"),
		span2 = document.getElementById("wrong2"),
		span3 = document.getElementById("wrong3"),
		span4 = document.getElementById("wrong4");

	if(name.value == ""){
		span0.style.display = "block";
		span0.innerHTML = " Debe ingresar su nombre";
		name.focus();
		return false;
	}
	else if(/([A-ZÑÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+/.test(name.value) == false){
		span0.style.display = "block";
		span0.innerHTML = " Primera letra en mayúscula";
		name.focus();
		return false;
	}
		else{
			span0.style.display = "none";
			lastname.focus();
		}
	if(lastname.value == ""){
		span1.style.display = "block";
		span1.innerHTML = "Debe ingresar su apellido";
		lastname.focus();
		return false;
	}
	else if(/([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+/.test(lastname.value) == false){
		span1.style.display = "block";
		span1.innerHTML = " Primera letra en mayúscula";
		lastname.focus();
		return false;
	}
		else{
			span1.style.display = "none";
			email.focus();
		}
	if(/[\w]+@{1}[\w\-]+\.[a-z]{2,3}/.test(email.value)==false){
		span2.style.display = "block";
		span2.innerHTML = "Verifique su e-mail";
		email.focus();
		return false;
	}
		else{
			span2.style.display = "none";
			password.focus();
		}
	if(password.value.length<6 || password.value.length>30){
		span3.style.display = "block";
		span3.innerHTML ="La contraseña debe tener al menos 6 caractéres";
		password.focus();
		return false;
	}
	else if(password.value == "password" || password.value == "123456" || password.value == "098754"){
		span3.style.display = "block";
		span3.innerHTML ="Seguridad de la contraseña: Débil";
		password.focus();
		return false;
	}
	else{
		span3.style.display = "none";
		select.focus();	
	}
	if(select.selectedIndex == ""){
		span4.style.display = "block";
		span4.innerHTML ="Debe seleccionar al menos un tipo de bici";
		select.focus();
		return false;
	}
	else{
		span4.style.display = "none";
	}
	element.reset();
}
