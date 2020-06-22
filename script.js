const numberDisplay = document.querySelector('#numbers');
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
  item.addEventListener('click', getValue);
});

function getValue(e) {
  const val = e.target.textContent;
  numberDisplay.textContent += val;
}