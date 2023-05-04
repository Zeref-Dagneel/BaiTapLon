function validData(){
    if(!validFirstName()) return;
    if(!validEmail()) return;
    if(!validPassword()) return;
    if(!validPasswordAgain()) return;
    if(!validNumberPhone()) return;
    window.location.href = "login.html";
}

function validFirstName(){
    var text = document.getElementById("inputFirstName").value;
    if(text.trim() == ""){
        alert("Không được rỗng");
        document.getElementById("inputFirstName").focus();
        return false;
    }
    var pattern = /^[A-Za-z ]+$/g;
    if(!(pattern.test(text))){
        alert("Không chứa ký tự số");
        document.getElementById("inputFirstName").focus();
        return false;
    }
    return true;
}

function validEmail(){
    var text = document.getElementById("inputEmail").value;
    if(text.trim() == ""){
        alert("Không được rỗng");
        document.getElementById("inputEmail").focus();
        return false;
    }
    var pattern = /^[A-Za-z]{1}[\w]+@{1}\D+$/g;
    if(!(pattern.test(text))){
        alert("Bắt đầu là chữ và có chứa @");
        document.getElementById("inputEmail").focus();
        return false;
    }
    return true;
}

function validPassword(){
    var text = document.getElementById("inputPassword").value;
    if(text.trim() == ""){
        alert("Mật khẩu không được để trống!");
        document.getElementById("inputPassword").focus();
        return false;
    }
    var pattern = /\w{8,}/g;
    if(!(pattern.test(text))){
        alert("Mật khẩu có độ dài nhiều hơn hoặc bằng 8");
        document.getElementById("inputPassword").focus();
        return false;
    }
    return true;
}

function validPasswordAgain(){
    var text = document.getElementById("inputPasswordConfirm").value;
    var textmain = document.getElementById("inputPassword").value;
    if(text.trim() == ""){
        alert("Xác nhận mật khẩu không được để trống");
        document.getElementById("inputPasswordConfirm").focus();
        return false;
    }
    if(text != textmain){
        alert("Mật khẩu vừa nhập không trùng khớp!");
        document.getElementById("inputPasswordConfirm").focus();
        return false;
    }
    return true;
}
function validNumberPhone(){
    var text = document.getElementById("inputNumberPhone").value;
    if(text.trim() == ""){
        alert("Số điện thoại không được rỗng");
        document.getElementById("inputNumberPhone").focus();
        return false;
    }
    var pattern = /^\d{10}$/g;
    if(!(pattern.test(text))){
        alert("Số điện thoại có độ dài là 10 và không chứa bất kỳ chữ hay ký tự nào");
        document.getElementById("inputNumberPhone");
        return false;
    }
    return true;
}