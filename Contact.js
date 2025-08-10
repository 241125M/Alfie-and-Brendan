document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("ContactFormSubject").textContent = `Hello ${username}`}