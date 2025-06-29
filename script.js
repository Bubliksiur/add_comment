/*
Dev:
    --> Bubliksiur
 */

const messageTextArea = document.getElementById('message');
const submitButton = document.getElementById('submit');

const main = document.querySelector('main');

function validate(e) {
    if (messageTextArea.value == '') {
        e.preventDefault()
        alert('To add a comment you need to write something')
        messageTextArea.value = '';
        return false;
    }
    if (messageTextArea.value.length > 100) {
        e.preventDefault()
        alert('You used too many letters! The maximum number of letters is 100')
        messageTextArea.value = '';
        return false;
    }
    if (messageTextArea.value.length < 2) {
        e.preventDefault()
        alert('You used too few letters, use at least 2!')
        messageTextArea.value = '';
        return false;
    }
    return true;
}

submitButton.addEventListener('click', (e) => {
    if (!validate(e)) return;

    const opinion = document.createElement('div');
    main.appendChild(opinion);
    opinion.textContent = messageTextArea.value;
    messageTextArea.value = '';

    const deleteButton = document.createElement('button');
    opinion.appendChild(deleteButton)
    deleteButton.textContent = 'X';

    deleteButton.addEventListener('click', () => {
        opinion.remove()
    })

})
