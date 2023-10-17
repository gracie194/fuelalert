const Firstname = document.getElementById("Firstname_field");
const Lastname = document.getElementById("Lastname_field");
const Email = document.getElementById("Email_field");
const s = document.getElementById("submitted")
const photo = document.getElementById("img");



function save(){

    let be = Firstname_field.value;
    console.log(be);

    let by = Lastname_field.value;
    console.log(by);

    let ba = Email_field.value;
    console.log(ba);
} 



var URL = window.URL|| window.webkitURL
    window.swapImage = function (elm) {
    var index = elm.dataset.index
    var URL = URL.createObjectURL(elm.files[0])
    document.querySelector('img[data-index = " ' + index + ' "]').src = url
}


// <button>Upload Image....</button> -->
   // if(currentUser.photoUrl){
   //    <img src = "({ currentUser.photoUrl })" />
   // }
   // else{
   //   <img src = "(/access/images/fallback.gif" />
   //       (endif )
   //  }






















// const loginForm = document.getElementById("login_form");
// const loginBtn = document.getElementById("login_form_submit");
// const loginErrorMsg = document.getElementById("login_error_msg");

// loginBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     const Username = loginForm.Username.value;
//     const Password = loginForm.Password.value;

//     if (username === "user" && Password ==="web_dev") {
//     	Alert("logged in Sucessfully.");
//     	location.reload();
//     }
//     else{
//     	loginError;
//     }
// })

