const MPA_PSI = 145.0377;
const INCH_MM = 25.4;
const ModeP = {
    BARLOW: 1,
    LAME: 2,
    ASME: 3
};

function calc_p(mode, strength, d_o, thick, efficiency) {
    switch (mode) {
        case ModeP.BARLOW:
            return p_barlow(strength, d_o, thick);
        case ModeP.LAME:
            return p_lame(strength, d_o, thick);
        case ModeP.ASME:
            return p_asme(strength, d_o, thick, efficiency);
        default:
            return NaN;
    }
}

function p_barlow(strength, d_o, thick) {
    return (2 * thick * strength) / (d_o);
}

function p_lame(strength, d_o, thick) {
    const d_i = d_o - 2 * thick;
    return strength * (d_o ** 2 - d_i ** 2) / (d_o ** 2 + d_i ** 2);
}

function p_asme(strength, d_o, thick, efficiency = 1) {
    return (2 * thick * strength * efficiency) / (d_o - 0.8 * thick);
}

function make_calculation() {
    const OD = Number(document.getElementById("input-od").value);
    const t = Number(document.getElementById("input-t").value);
    const fty = Number(document.getElementById("input-fty").value);
    const ftu = Number(document.getElementById("input-ftu").value);
    const e = Number(document.getElementById("input-e").value);
    const sd = Number(document.getElementById("input-f").value);
    const mode = Number(document.getElementById("select-mode").value);

    const pd = calc_p(mode, fty, OD, t, e) / sd;
    const pb = calc_p(mode, ftu, OD, t, e) / sd;
    const sb = pb / pd;

    document.getElementById("pd-mpa").innerHTML = pd.toFixed(2);
    document.getElementById("pd-psi").innerHTML = (pd * MPA_PSI).toFixed(2);

    document.getElementById("pb-mpa").innerHTML = pb.toFixed(2);
    document.getElementById("pb-psi").innerHTML = (pb * MPA_PSI).toFixed(2);

    document.getElementById("sb").innerHTML = sb.toFixed(2);
}

function set_6061() {
    document.getElementById("input-fty").value = 241;
    document.getElementById("input-ftu").value = 290;
    make_calculation();
}

function set_6063() {
    document.getElementById("input-fty").value = 214;
    document.getElementById("input-ftu").value = 241;
    make_calculation();
}

(() => {
    make_calculation();
})()
