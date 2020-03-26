let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/pig_image.jpg') {
		myImage.setAttribute ('src','images/tough_pig.jpg');
	} else {
		myImage.setAttribute('src','images/pig_image.jpg')
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName || myName === null) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = myName + ', this pig may be cooler than you...'
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = storedName + ', this pig may be cooler than you...'
}

myButton.onclick = function() {
	setUserName();
}