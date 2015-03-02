// (Showing || hiding) (delete || edit) buttons
var messages = document.getElementsByClassName("message1");
for(var i = 0 ; i < messages.length ; i++) {
    messages[i].addEventListener("mouseover",function(){
        this.childNodes[3].style.visibility = "visible";
        this.childNodes[5].style.visibility = "visible";
    });
    messages[i].addEventListener("mouseout",function(){
        this.childNodes[3].style.visibility = "hidden";
        this.childNodes[5].style.visibility = "hidden";
    });
}
