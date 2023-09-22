const title=document.getElementById("title");
const nameField=document.getElementById("name")
const signinbtn=document.getElementById("signinBtn");
const signupbtn=document.getElementById("signupBtn");
signupbtn.onclick=function(){
    title.innerHTML="Sign Up";
    nameField.style.display="block";
    signinbtn.value="Sign Up";
}
signinbtn.onclick=function(){
    title.innerHTML="Login";
    nameField.style.display="none";
    signinbtn.value="Login";
}