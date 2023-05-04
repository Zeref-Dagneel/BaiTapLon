function validData(){
    if(!validEmail()) return;
    if(!validPassword()) return;
    window.location.href = "index.html";
}

function validEmail(){
    var text = document.getElementById("typeEmailX").value;
    if(text.trim() == ""){
        alert("Email không được để trống");
        document.getElementById("typeEmailX").focus();
        return false;
    }
    return true;
}
function validPassword(){
    var text = document.getElementById("typePasswordX").value;
    if(text.trim() == ""){
        alert("Password không được để trống");
        document.getElementById("typePasswordX").focus();
        return false;
    }
    return true;
}