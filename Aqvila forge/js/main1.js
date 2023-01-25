//navigacija -dinamicko ispisivanje FOR-IN petljom
var navBar = document.querySelector("#navigation ul");

var navNames = ["Home", "Products", "About", "Author", "Dokumentacija"];
var navLinks = ["index.html", "#products", "#about_us", "#author", "Dokumentacija.pdf" ];

for(var index in navNames){
	navBar.innerHTML += `<li><a href="${navLinks[index]}">  ${navNames[index]} </a></li>`;
}

//slika
var photo = document.createElement("img");
photo.setAttribute("src", "img/me.jpg");
photo.setAttribute("alt", "Me with my works");
console.log(photo);
var aboutImage = document.getElementById("aboutPhoto");
aboutImage.appendChild(photo);

var text1 = document.getElementById("aboutPhotoText");
var infos = document.createElement("span");

///
function slide(e) {

	const slideIn = (window.scrollY + window.innerHeight) - photo.height;

}
window.addEventListener('scroll', slide);

//////
let nekiText = document.getElementsByClassName("title");
let nekiBlok = document.getElementById("main");
window.addEventListener(scroll, function () {
	let moving = window.scrollY;
	nekiText.style.top = 50 + moving * -0.5 + '%';
	nekiBlok.style.top = moving * -0.12 + 'px';
})

//galerija proizvoda - dinamicko ispisivanje FOR petljom
var gallery = document.querySelector("#products");
var swordsImg = ["Longsword", "heavysabre", "russianshashka", "katana", "Katzbalger", 
				"Medivaldagger", "Gladius", "Falcata", "Celtic", ];
var swordsName = ["Longsword", "Heavy Sabre", "Russian Shashka", "Katana", "Katzbalger", "Medival dagger", 
					"Gladius","Falcata", "Celtic sword",];
var swordAbout=["Replica of medival longsword</br>Lenght:120cm</br>Blade width:5cm</br>Weight:1.5kg", 
				"19th century sabre </br>Lenght:100cm</br>Blade width:3cm</br>Weight:0.9kg",
				"Russian Cossack shashka </br>Lenght:90cm</br>Blade width:3cm</br>Weight:0.7kg",
				"Replica of Japanese Katana </br>Lenght:105cm</br>Blade width:4cm</br>Weight:1.2kg",
				"German Mercenary sword from 17th century </br>Lenght:85cm</br>Blade width:4cm</br>Weight:1.1kg",
				"Knight dagger </br>Lenght:35cm</br>Blade width:2.5cm</br>Weight:0.4kg",
				"Ancient Roman legionar gladius </br>Lenght:70cm</br>Blade width:4cm</br>Weight:0.8kg",
				"Roman Falcata </br>Lenght:75cm</br>Blade width:5cm</br>Weight:0.9kg",
				"Barbarian Celtic sword </br>Lenght:70cm</br>Blade width:4.5cm</br>Weight:0.8kg",]

for (let i = 0; i < swordsName.length; i++) {
	gallery.innerHTML+=`<div class="gallery"><img src="img/New folder/${swordsImg[i]}.jpg" alt="${swordsName[i]}"/>
	<div class="swordProducts"><h3>${swordsName[i]}</h3><a>More about</a>
	<div class="moreAbout"><p>${swordAbout[i]}</p></div></div></div>`
}

//Slajder
setInterval(slider, 2000);

var counter = 1;
function slider() {
	document.querySelector("#slider img").src = "img/slide" + counter + ".jpg";
	counter++;
	if (counter == 6) {
		counter = 1;
    }
}

//forma - dinamicko ispisivanje FOR-OF petljom
function writeForm() {
	var tabs = ["Name", "Last Name", "Email"];
	var forms = document.getElementById("forms");
	var writing = "<h4>Send me a question</h4>";
	for (let index of tabs) {
		writing += `<div class="text-tabs">
							<input type="text" class="validation" title="Write a message down bellow" id="${index}" placeholder="${index}">
							<h3 class="value">Value ${index} is not correct</h3>
					</div>`;
		console.log(index);
	}
	writing += `<div class="text-tabs">
					<textarea class="form-control" name="message" rows="5" cols="40" id="message"
							placeholder="Write a message to contact me..." maxlength="300">
					</textarea>
					<div id="counting">0/300</div>
				</div>
				<input type="submit" id="send" value="send" />`
	forms.innerHTML = writing;
	console.log(writing);
};
writeForm()

document.getElementById("message").addEventListener("keyup", function () {
	document.querySelector("#counting").textContent = `${document.getElementById("message").value.length}/300`;
});

//regularni izrazi
document.querySelector("#send").addEventListener("click", function (e)
{
	e.preventDefault()
	findErrors()
})

function findErrors() {

	var wrong = [];
	let fistName, lastName, email, message;
	firstName = document.querySelector("#Name");
	lastName = document.querySelector("#LastName");
	email = document.querySelector("#Email");
	message = document.querySelector("#message");
	console.log(firstName, lastName);

	let firstNameRegex = /^[A-ZĆČŽŠĐ][a-zčćžšđ]{2,14}$/;
	let lastNameRegex = /^[A-ZĆČŽŠĐ][a-zčćžšđ]{2,18}$/;   // ([A-ZĆČŽŠĐ][a-zčćžšđ] {2,18})
	let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	let messageRegex = /.{2,300}/;
	let firstNameDone = false;
	let lastNameDone = false;
	let emailDone = false;
	let messageDone = false;

	function checkAll(itemValue, itemRegex, itemDone) {
		if (itemRegex.test(itemValue.value)) {
			itemDone = true;
			if (itemValue.classList.contains("danger"))
				itemValue.classList.remove("danger")
		}
		else
		{
			itemDone = false;
			if (!itemValue.classList.contains("danger"))
				itemValue.classList.add("danger")
        }
    }
	
	checkAll(firstName, firstNameRegex, firstNameDone)
	checkAll(lastName, lastNameRegex, lastNameDone)
	checkAll(email, emailRegex, emailDone)
	checkAll(message, messageRegex, messageDone)
};

//PROGRESS BAR Primer CODE RE-USE
function increase(data) {

	let SPEED = 51;

	let limit = parseInt(document.getElementById(data).innerHTML, 10);

	for (let i = 0; i <= limit; i++) {
		setTimeout(function () {
			document.getElementById(data).innerHTML = i + "%";
		}, SPEED * i);
	}
	console.log(limit);
}

var html = ``;
for (let i =1; i < 4; i++) {
	html = "value" + i;
	increase(html);
}

//PROGRESS BAR : prvobitna verzija
/*function increase() {
   
    let SPEED = 51;
  
    let limit = parseInt(document.getElementById("value1").innerHTML, 10);

    for(let i = 0; i <= limit; i++) {
        setTimeout(function () {
            document.getElementById("value1").innerHTML = i + "%";
        }, SPEED * i);
    }
	console.log(limit);
}
increase();
function increase2(){
	let SPEED = 70;
    let limit = parseInt(document.getElementById("value2").innerHTML, 10);
    for(let i = 0; i <= limit; i++) {
        setTimeout(function () {
            document.getElementById("value2").innerHTML = i + "%";
        }, SPEED * i);
    }
	console.log(limit);
}
increase2();

function increase3(){
	let SPEED = 60;
    let limit = parseInt(document.getElementById("value3").innerHTML, 10);
    for(let i = 0; i <= limit; i++) {
        setTimeout(function () {
            document.getElementById("value3").innerHTML = i + "%";
        }, SPEED * i);
    }
	console.log(limit);
}
increase3();
*/

//FOOTER - dinamicko ispisivanje FOR-IN petljom
var links = document.querySelector("#links ul");

const linked = ["https://twitter.com/?lang=sr", "https://www.instagram.com/", "https://www.youtube.com/", "https://www.facebook.com/"];
const icons = ["fa fa-twitter", "fa fa-instagram", "fa fa-youtube", "fa fa-facebook"];

for (var index in linked) {
	links.innerHTML += `<li><a href="${linked[index]}"> <i class="${icons[index]}"></i></a>|</li>`;
}

