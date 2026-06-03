function entrar(){

let user = document.getElementById("user").value;
let key = document.getElementById("key").value;

// login de teste
if(user === "admin" && key === "SHELBY2026"){
    document.getElementById("login").style.display = "none";
    document.getElementById("painel").style.display = "block";
}else{
    alert("Usuário ou Key inválidos!");
}

}
