var container = document.querySelector(".container")
var nick = document.querySelector(".nick");
var mail = document.querySelector(".mail");
var password = document.querySelector(".password");
var send = document.querySelector(".send");


//[A-Z] один большой символ в диапазоне от A-Z
//[A-Z]+ сколко угодно больших символов в диапазое от A-Z
//[a-z] один маленький символ 
//[a-z]+ сколько угодно маленьих символов
//[- '] тире пробел или апостоф только по 1 каждого вида должны быть все сразу
//[0-9] цифр в диапазое от 0-9 тоько 1
//[0-9]+ сколько угодно цифр в дипазоне от 0-9
// Пример
//[A-Z][a-z]+[0-9][-][a-z] Идет сначала одна большая буква потом сколько угодно маленьких
// потом одна цифра после нее тире и еще одна буква

nick.addEventListener("mouseover", function(){
	nick.style.border = 2 + "px solid black"
	nick.style.boxShadow = 0 + " " + 0 + " " + 20 + "px #ff000000"
})

mail.addEventListener("mouseover", function(){
	mail.style.border = 2 + "px solid black"
	mail.style.boxShadow = 0 + " " + 0 + " " + 20 + "px #ff000000"
})

password.addEventListener("mouseover", function(){
	password.style.border = 2 + "px solid black"
	password.style.boxShadow = 0 + " " + 0 + " " + 20 + "px #ff000000"
})

send.addEventListener("click", function(){

var testN = false
var testM = false
var testP = false

	var nickValue = nick.value;
	var testNick = /[A-Z]+[a-z-._0-9]/;
	if(testNick.test(nickValue)){
		testN = true;
	} else {
		nick.style.border = 2 + "px solid red";
		nick.style.boxShadow = 0 + " " + 0 + " " + 20 + "px red"
	}

	var mailValue = mail.value;
	var testMail = /[w][w][w][.][A-Za-z-_.0-9]+[@][A-Za-z]+[.][a-z]+/;
	if(testMail.test(mailValue)){
		testM = true;
	} else {
		mail.style.border = 2 + "px solid red";
		mail.style.boxShadow = 0 + " " + 0 + " " + 20 + "px red"
	}

	var passwordValue = password.value;
	var testPassword = /(?=.*[A-Za-z]{9})(?=.*[A-Z]{1})(?=.*[0-9])/
	if(testPassword.test(passwordValue)){
		testP = true
	}else{
		password.style.border = 2 + "px solid red"
		password.style.boxShadow = 0 + " " + 0 + " " + 20 + "px red"
	}

	if(testN && testM && testP === true){
		var enter = document.createElement("div")
		enter.classList.add("enter");
		container.appendChild(enter);
		var enterText = document.createElement("div")
		enterText.classList.add("enter-text")
		enterText.innerHTML = "Вход выполнен"
		enter.appendChild(enterText)
	}

/*function ValidateEmail(mail){
 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  		{
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
https://developer.mozilla.org/ru/docs/Learn/HTML/Forms/%D0%92%D0%B0%D0%BB%D0%B8%D0%B4%D0%B0%D1%86%D0%B8%D1%8F_%D1%84%D0%BE%D1%80%D0%BC%D1%8B
https://www.w3resource.com/javascript/form/email-validation.php

*/
})