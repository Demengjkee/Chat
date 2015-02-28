var messages = document.getElementsByClassName("message1");
for(var i = 0 ; i < messages.length ; i++) {
    messages[i].addEventListener("mouseover",function(){
        this.childNodes[3].style.visibility = "visible";
        this.childNodes[5].style.visibility = "visible";
    });
}
for(var j = 0 ; j < messages.length ; j++) {
    messages.item(j).addEventListener("mouseout",function(){
        this.childNodes[3].style.visibility = "hidden";
        this.childNodes[5].style.visibility = "hidden";
    });
}
