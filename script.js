const scriptURL = "https://script.google.com/macros/s/AKfycbyq27Yg_XK5KpQOs_d2ddmWafJGadsxj3UsuO-515K9CuzeA0aDQFLdnxXSmgw3GE7csw/exec";
const form = document.forms["submit-to-google-sheet"];

const endMsg = document.getElementById("endMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        endMsg.innerHTML = "Thank you for subscribing our page";
        setTimeout(function(){
            endMsg.innerHTML = "";
        },3000);
        form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// Thank you for subscribing our page




