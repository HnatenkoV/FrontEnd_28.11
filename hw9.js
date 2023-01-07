const input = document.getElementById('input');
const contentDiv = document.getElementById('contentDiv');
const btnEnter = document.getElementById('btnEnter');
const btnClear = document.getElementById('btnClear');

function clickBtnEnter () {
    if (input.value === '') {
        input.placeholder = "Заполните это поле";
    }

    contentDiv.textContent = input.value;
}

btnEnter.addEventListener('click', clickBtnEnter );

function clickBtnClear () {
    input.value = '';
    contentDiv.textContent = '';
}

btnClear.addEventListener('click', clickBtnClear);