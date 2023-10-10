const mybutton = document.getElementById("myBtn");

const mytext = document.getElementById("text");

const readless = document.getElementById("readless");
mybutton.addEventListener("click", (e) =>{
mytext.classList.toggle("showMore");
if (mybutton.innerText ==="Read More") {
mybutton.innerText = "Read less";
readless.style.display = "block"
}else{
	mybutton.innerText = "Read More"
	readless.style.display = "none"
}
	})




// const dots = document.getElementById('dots');
 //let moreText = document.getElementById('more');
 //const mybutton = document.getElementById('myBtn');
//BtnText.addEventListener("click",(e) =>{
	//moretext.classList.toggle("show More");
	//if (BtnText.innerText === "Read More") {
	  //  BtnText.innerText = "Read Less";
	//}else{
		//BtnText.innerText = "Read More";
	//}
//}
	//)
//}