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
    const formButtonField = '1843953237';
    const formMobileField = '1611412617'

    return `${formUrlBase}?entry.${formLayoutField}=${layoutEntry}&entry.${formButtonField}=${buttonEntry}&entry.${formMobileField}=${isMobileDevice()}&submit=Submit`;
};

const isMobileDevice = function () {
    let check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check ? 'true' : 'false';
};
