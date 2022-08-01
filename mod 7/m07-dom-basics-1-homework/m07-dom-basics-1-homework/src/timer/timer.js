document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('input');
  const button = document.querySelector('button');
  const div = document.querySelector('div');
  let count = 0;
  let nIntervId;
  button.addEventListener('click', function() {
    count = 0;
    div.textContent = input.value;
    nIntervId = setInterval(onClick, 1000);
    // return  nIntervId;
  })

  function onClick() {
    div.textContent = input.value - count;
    count += 1;
    if (div.textContent <= 0 ) {
      div.textContent = 0;
      clearInterval(nIntervId);
    }
    return div.textContent;
 };
});
