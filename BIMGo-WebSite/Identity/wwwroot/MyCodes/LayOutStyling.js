

var logOutButton = document.getElementById('Logout-Button-ID');

logOutButton.style.display = 'none';


var AllButtons = document.getElementsByClassName("btn btn-primary btn-md");


for (var i = 0; i < AllButtons.length; i++) {
    AllButtons[i].style.backgroundColor = '#199eb8';
}