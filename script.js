const numberbuttons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClear = document.querySelector('[data-all-clear]');
const deleteNum = document.querySelector('[data-delete]');
const equals = document.querySelector('[data-equals]');
const previous = document.querySelector('[data-previous-id]');
const current = document.querySelector('[data-current-id]');



// gridItems.forEach(item => {
//   item.addEventListener('click', getValue);
// });

// function getValue(e) {
//   const valueArray = [];
//   const val = e.target.textContent;
//   if(val === 'Del'){
//     console.log(valueArray.pop(-1));
//     currentNum.textContent -= valueArray;
//     return valueArray;
//   } else {
//     valueArray.push(val);
//     }
//   valueArray.join('')
//   console.log(valueArray.join());
//   currentNum.textContent += valueArray;
// }