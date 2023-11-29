function control() {
    const x = document.getElementById("userid").value;
    const y = document.getElementById("passwdid").value;
    if(x === "Berk" && y === "12345") {
        alert("Giriş Başarılı!é");
    }
    else{
        alert("Giriş Başarısız.");
        alert(x, y);
    }
    
}