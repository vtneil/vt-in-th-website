const vKey = 'visited';
const buttonLabels = [
    ['Button A', 'a'],
    ['Button B', 'b']
];

const loadPoll = function () {
    const buttonContainer = document.getElementById('buttonContainer');

    const layout = Math.random() < 0.5 ? 'column' : 'row';
    buttonContainer.style.flexDirection = layout;

    console.log(layout)

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

            if (localStorage.getItem(vKey) === null) {
                adminSetPoll();
            }
            loadThankYou();
        });

        button.classList.add('btn', 'btn-primary', 'button');
        buttonContainer.appendChild(button);
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
    if (localStorage.getItem(vKey) === null || localStorage.getItem(vKey) === '0') {
        loadPoll();
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
