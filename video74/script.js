let button = document.getElementById("btn")
// list of all mouse event 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were Cllicked</b> Enjoy your click!"
})