// (Showing || hiding) (delete || edit) buttons
function start() {
    var username;
    var sendButton = document.getElementsByClassName("sendButton");
    function addMessageDiv(Text){
        var newDiv = document.createElement('div');
        newDiv.className = 'message1';
        newDiv.innerHTML = "<span class = 'nickname'>" + username + ": " + "</span>"
            + "<img src='resources/remove.png' class='delete'>" +  "<img src='resources/edit.png' class='edit'>"
        + "<p class='text'>" + Text + "</p>";
        return newDiv;
    }
    sendButton[0].addEventListener("click",function(){
        if(username != undefined) {
            var mainWindow = document.getElementsByClassName("mainWindow")[0];
            var msg = document.getElementsByClassName("message")[0].value;
            var messageDiv = addMessageDiv(msg);
            mainWindow.appendChild(messageDiv);
            document.getElementsByClassName("message")[0].value = "";
            messageDiv.addEventListener("mouseover", function () {
                this.childNodes[1].style.visibility = "visible";
                this.childNodes[2].style.visibility = "visible";
            });
            messageDiv.addEventListener("mouseout", function () {
                this.childNodes[1].style.visibility = "hidden";
                this.childNodes[2].style.visibility = "hidden";
            });
            messageDiv.childNodes[1].addEventListener("click", function(){
                var todel = this.parentNode;
                todel.parentNode.removeChild(todel);

            });
            messageDiv.childNodes[2].addEventListener("click", function(){
                var oldmsg = this.parentNode.childNodes[3];
                oldmsg = oldmsg.innerHTML;
                this.parentNode.childNodes[3].innerHTML = prompt("EditMessage",oldmsg);
            });
        }
        else {
            alert("please, enter your nickname");
        }
    });
    function addUserDiv(){
        var newDiv = document.createElement('div');
        newDiv.className = 'onlineUser';
        newDiv.innerHTML = "<p class='text'>" + username + "</p>";
        return newDiv;
    }
    var setNameButton = document.getElementsByClassName("confirmNameButton")[0];
    setNameButton.addEventListener("click",function(){
        username = document.getElementsByClassName("username")[0].value;
        var user = document.getElementsByClassName("usersOnline")[0];
        var foreveralone = document.getElementsByClassName("onlineUser")[0];
        if(foreveralone != undefined) {
            user.removeChild(document.getElementsByClassName("onlineUser")[0]);
        }
        user.appendChild(addUserDiv());
    });
}
