let input = document.getElementById("new-input");
let h2 = document.getElementById("h2");
let timeout;



function enterOfText() {
  let text = input.value;
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    h2.innerHTML = text;
  }, 300);
}

function clearingInput() {
  h2.innerHTML = "";
}

input.oninput = enterOfText;
