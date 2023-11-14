document.documentElement.setAttribute('data-bs-theme', 'white');

if (typeof (localStorage) !== 'undefined') {
    let light_mode = 'white';
    let dark_mode = 'dark';
    document.documentElement.setAttribute('data-bs-theme', light_mode);
    // if (localStorage.getItem('mode') === null) {
    //     localStorage.setItem('mode', light_mode);
    //     document.documentElement.setAttribute('data-bs-theme', light_mode);
    //     document.body.className = `bg-${light_mode}`;
    // } else {
    //     document.documentElement.setAttribute('data-bs-theme', localStorage.getItem('mode'));
    //     document.body.className = `bg-${localStorage.getItem('mode')}`;
    // }
}