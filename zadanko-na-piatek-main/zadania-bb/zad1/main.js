const goscie  = document.getElementById("goscie");
const poprawiny = document.getElementById("poprawiny");
const kasa = document.getElementsByClassName("kasa");




function obliczenia() {
    let ilegosci  = parseInt(goscie.value);
    let czypoprawiny =  poprawiny.checked;
    let koszty = ilegosci * 100;
    if (czypoprawiny  == 1) {
        koszty *= 1.3;  
    }
    kasa[0].innerText = koszty;  
}


goscie.addEventListener("change",obliczenia);
poprawiny.addEventListener("change",obliczenia);






