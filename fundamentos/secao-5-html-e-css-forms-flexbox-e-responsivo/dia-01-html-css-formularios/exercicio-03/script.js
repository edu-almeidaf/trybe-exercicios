const handleSubmit = (event) => {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
        alert('Dados inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
}

const clearFields = () => {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
        const userInput = formElements[index];
        if (formElements[index].type === 'radio' || formElements[index].type === 'checkbox') {
            userInput.checked = false;
        } else {
            userInput.value = '';
        }
    }
    textArea.value = '';
}

const enableSubmit = () => {
    const submitBtn = document.getElementById('submit-button');
    const agreement = document.getElementById('agreement');
    submitBtn.disabled = !agreement.checked;
}

const textInputValidation = () => {
    const email = document.getElementById('email');
    const invalidEmail = email < 10 || email > 50;

    const name = document.getElementById('fullName');
    const invalidName = name < 10 || name > 40;

    const reason = document.getElementById('why').value.length;
    const invalidReason = reason > 500;

    if (invalidEmail || invalidName || invalidReason) {
        return false;
    } else {
        return true;
    }
}

window.onload = () => {
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', handleSubmit);
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', clearFields);
    const agreement = document.getElementById('agreement');
    agreement.addEventListener('change', enableSubmit);
}