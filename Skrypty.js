function calculate() {
    let powerNumber = document.getElementById("powerNumber").value;
    let rangeNumber = document.getElementById("rangeNumber").value;
    let netNumber = document.getElementById("netNumber").value;
    let basepower;
    let wynik;

    if (powerNumber > 0) {
        basepower = powerNumber
        powerNumber = powerNumber * 144;
    }
    if (rangeNumber > 0) {
        powerNumber = powerNumber * rangeNumber;
    }
    if (netNumber > 0) {
        netNumber = basepower * 3 * netNumber;
        powerNumber = powerNumber + netNumber;
    }
        wynik = powerNumber + "to zużycie węgla";   

    document.getElementById("wynik").innerHTML = wynik;
}