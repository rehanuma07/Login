const button = document.getElementById("startBtn");

button.addEventListener("click", () => {

button.innerHTML = "Loading...";

setTimeout(() => {

button.innerHTML = "Welcome ✔";

},1000);

});