const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", 
"4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?",
"/"];

let pw1Text = document.getElementById("password-1")
let pw2Text = document.getElementById("password-2")
let pwLength = document.getElementById("pw-length")
let copyButton1 = document.getElementById("password-1")
let copyButton2 = document.getElementById("password-2")

// Generate the password
function genPass() {
    let pw = ""
    for (let i = 0; i < pwLength.value; i++) {
        pwLength.value > 7 && pwLength.value < 18 
        ? pw += characters[Math.floor(Math.random() * characters.length)]
        : pw = "Please select a number between 8 and 17"
        }
        return pw
    }

// Show password on the relevant buttons
function showPass() {
    pwOne = genPass()
    pwTwo = genPass()
    pw1Text.textContent = pwOne
    pw2Text.textContent = pwTwo
}

// Copy passwords to clipboard
pw1Text.addEventListener("click", (event) => {
    let content = document.getElementById('password-1').textContent

    navigator.clipboard.writeText(content)
    pw1Text.textContent = "Password copied to clipboard"
})

pw2Text.addEventListener("click", (event) => {
    let content = document.getElementById('password-2').textContent

    navigator.clipboard.writeText(content)
    pw2Text.textContent = "Password copied to clipboard"
})