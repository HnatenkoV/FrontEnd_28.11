const input = document.getElementById('input');
const contentDiv = document.getElementById('contentDiv');
const btnEnter = document.getElementById('btnEnter');
const btnClear = document.getElementById('btnClear');

btnEnter.addEventListener('click', () => {
    if (input.value === '') {
        input.placeholder = "Заполните это поле";
    }

    contentDiv.textContent = input.value;

});

btnClear.addEventListener("click", () => {
    input.value = '';
    contentDiv.textContent = '';
});
