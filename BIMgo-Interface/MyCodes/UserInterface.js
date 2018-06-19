function SetCurrentCaseTo(Case) {
    currentCase = Case;
    document.getElementById("Current_Status").innerHTML=currentCase.toString();
}