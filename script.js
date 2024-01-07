const charval=document.getElementById("textarea");
let totalCount=document.getElementById("total-counter");
let remainingCount=document.getElementById("remaining-counter");
let userchar=0;

// to update the character on screen

const updateCounter=()=>{
    userchar=charval.value.length;
    totalCount.innerHTML=userchar;
    remainingCount.innerHTML=150-userchar;

};
charval.addEventListener("keyup",()=>updateCounter());

//to copy text

const copytext=()=>{
    charval.select();
    charval.setSelectionRange(0,150)
    navigator.clipboard.writeText(charval.value)
}