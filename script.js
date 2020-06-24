class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clearAll();
  }

  clearAll() {
    this.currentOperand = '';
    this.previousOperandTextElement.innerText = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand =  this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+': 
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case 'x': 
        computation = prev * current
        break
      case '÷': 
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const floatNumber = parseFloat(number);
    if (isNaN(floatNumber)) return '';
    return floatNumber.toLocaleString('en');
    // return number;
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = 
      this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = 
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    }
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
    calculator.chooseOperation(operation.innerText);
    calculator.updateDisplay();
    
  })
})

equals.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
})

allClear.addEventListener('click', button => {
  calculator.clearAll();
  calculator.updateDisplay();
});

deleteNum.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
})


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

