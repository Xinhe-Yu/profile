const checkbox = document.getElementById('toggle');
const body = document.querySelector('body');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    body.classList.add("light");
    body.classList.remove("dark")
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
  }
});
