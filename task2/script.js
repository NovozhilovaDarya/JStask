const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => 
{
alert('Служит для вывода информации в консоль');
})

document.querySelector('#alert').addEventListener('click', () => 
{
alert('Служит для вывода обработанной и другой информации в диалоговом окне');
})

document.querySelector('#prompt').addEventListener('click', () => 
{
alert('Отображает диалоговое окно с запросом на ввод текста');
})
