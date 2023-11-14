function swMode() {
    let light_mode = 'white';
    let dark_mode = 'dark';
    let body = document.body;
    let altMode = document.documentElement.getAttribute('data-bs-theme') === dark_mode ? light_mode : dark_mode;
    document.documentElement.setAttribute('data-bs-theme', altMode);
    body.className = `bg-${altMode}`;
    if (typeof (localStorage) !== 'undefined')
        localStorage.setItem('mode', altMode);
}
