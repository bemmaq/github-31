
const colorPicker = document.getElementById('colorPicker');
const selectedColor = document.getElementById('colorValue');

colorPicker.addEventListener('input', (event) => {
  const selectedHexColor = event.target.value;
  selectedColor.textContent = selectedHexColor;
  document.body.style.backgroundColor = selectedHexColor;
});