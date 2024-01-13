const a = document.querySelector('#prompt').addEventListener('click', () => {
    event.preventDefault();
    const userText = prompt('Введите текст');
const userTextField = document.querySelector('#prompt');
userTextField.textContent = userText;
});
