const kilometry = document.getElementById("kilometry");
const gdansk = document.getElementById("gdansk");
const kasa =  document.getElementsByClassName("kasa");

function liczenie() {
    if (!gdansk.checked){
        kasa[0].innerText = kilometry.value * 2;
    }
    else{
        kasa[0].innerText = "Dowieziemy twoje zamówienie za darmo";
    }
}

kilometry.addEventListener("change",liczenie);
gdansk.addEventListener("change",liczenie);