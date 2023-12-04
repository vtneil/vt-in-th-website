const vKey = 'visited';
const buttonLabels = [
    ['200', 'a'],
    ['200', 'b']
];

const loadPoll = function (mode, lockForm) {
    const layout = (mode === 'random') ? ((Math.random() < 0.5) ? 'column' : 'row') : mode;

    const textField = document.createElement('div');
    textField.id = 'textField';
    textField.innerText = '100 + 100 = ?'

    const buttonField = document.createElement('div');
    buttonField.id = 'buttonField';
    buttonField.style.flexDirection = layout;

    for (const buttonLabel of buttonLabels) {
        const button = document.createElement('a');
        button.href = `#`;

        button.innerHTML = `${buttonLabel[0]}`;
        button.addEventListener('click', function () {
            const qUrl = makeFormQueryUrl(layout, buttonLabel[1]);
            fetch(qUrl, {
                method: 'POST'
            }).catch(function () {
                console.log('Form submitted.');
            });

            if (localStorage.getItem(vKey) === null && lockForm) {
                adminSetPoll();
            }
            loadThankYou();
        });

        button.classList.add('btn', 'btn-default', 'button');
        buttonField.appendChild(button);
    }

    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.style.flexDirection = 'column';
    buttonContainer.appendChild(textField);
    buttonContainer.appendChild(buttonField);

    if (layout === 'column') {
        document.querySelectorAll('.button').forEach(function (btn) {
            btn.style.padding = '10px 60px';
        });
    }
};

const loadThankYou = function () {
    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.innerText = 'Your response has been recorded.\nThank you for your response!';
};

const loadLimit = function () {
    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.innerText = 'You\'ve responded this form.\nThank you for your response!';
};

const loadPage = function () {
    const urlParams = new URLSearchParams(window.location.search);

    const viewResults = urlParams.has('results');
    if (viewResults) {
        window.location.href = '/poll/button-layout/results.html';
    }

    const lockForm = !urlParams.has('admin');
    if (localStorage.getItem(vKey) === null || localStorage.getItem(vKey) === '0' || !lockForm) {
        const param = urlParams.get('q');
        const mode = (param === null) ? 'random' : ((param === 'a') ? 'column' : 'row');
        loadPoll(mode, lockForm);
    } else {
        loadLimit();
    }
};

document.addEventListener('DOMContentLoaded', loadPage);

/* For admin use */

const adminSetPoll = function () {
    localStorage.setItem(vKey, '1');
    console.log('The poll as been closed for this user.')
};

const adminResetPoll = function () {
    localStorage.removeItem(vKey);
    console.log('The poll as been opened for this user.')
};

const adminRetainPoll = function () {
    localStorage.setItem(vKey, '0');
    console.log('The poll as been opened permanently for this user.')
};

const makeFormQueryUrl = function (layoutEntry, buttonEntry) {
    const formUrlBase = 'https://docs.google.com/forms/d/e/1FAIpQLScAC0llL8Muv7LEZHVtFVI56QIjJNGlzooO3IU7r4tapCqzrQ/formResponse';
    const formLayoutField = '78306195';
    const formLayoutButton = '1843953237';

    return `${formUrlBase}?entry.${formLayoutField}=${layoutEntry}&entry.${formLayoutButton}=${buttonEntry}&submit=Submit`;
};
