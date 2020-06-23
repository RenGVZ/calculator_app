class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clearAll();
  }

  clearAll() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {

  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand =  this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    console.log(operation)
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute(this.previousOperand, this.currentOperand, operation)
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute(previousOperand, currentOperand, operation) {
    console.log(`${previousOperand}, ${currentOperand}, ${operation}`)
    
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = this.previousOperand;
  }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClear = document.querySelector('[data-all-clear]');
const deleteNum = document.querySelector('[data-delete]');
const equals = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous]');
const currentOperandTextElement = document.querySelector('[data-current]');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);


numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(operation => {
  operation.addEventListener('click', () => {
    // let operation = operation.innerText;
    calculator.chooseOperation();
    calculator.updateDisplay();
    
  })
})

allClear.addEventListener('click', button => {
  calculator.clearAll();
  calculator.updateDisplay();
});


// numberbuttons.forEach(item => {
//   item.addEventListener('click', getValue);
// });

// function getValue(e) {
  // const valueArray = [];
  // const val = e.target.textContent;
  // console.log(val);
  // console.log(current)
  // current.innerText += val
  // if(val === 'Del'){
  //   console.log(valueArray.pop(-1));
  //   current.textContent -= valueArray;
  //   return valueArray;
  // } else {
  //   valueArray.push(val);
  //   }
  // valueArray.join('')
  // console.log(valueArray.join());
  // current.textContent += valueArray;
// }

