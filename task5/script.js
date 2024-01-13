const button = document.querySelector('#type').addEventListener ('click', ()=> {
    event.preventDefault();
    const userText = document.querySelector('#myinput');
const userTextField = document.querySelector('#duplicateField');
userTextField.textContent = userText.value;
console.log('Текст в p изменён на', userText);
    
const input = document.querySelector('#myinput');
myinput.value = '';
})