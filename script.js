// Script for navigation bar
const bar = document.querySelector('#bar')
const nav = document.querySelector('#navbar')
const close = document.getElementById('close')

if(bar){
    bar.addEventListener('click', function(){
        nav.style.right = "0px";
    })
}
if(close){
    close.addEventListener('click', function(){
        nav.style.right="-300px"
    })
}
