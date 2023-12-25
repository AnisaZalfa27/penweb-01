const username = "zalfa"
const password = "12345678"

function auth(){
    let userInput = document.getElementById("username").value
    let passwordInput = document.getElementById("password").value
    let form = document.getElementById('form')

    if (userInput == username && passwordInput == password){
        alert("Login berhasil")
        form.submit()
    } else{
        alert("Login Gagal")
    }

}