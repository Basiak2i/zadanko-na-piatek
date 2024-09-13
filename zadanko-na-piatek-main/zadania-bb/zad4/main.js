document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('liczenie').addEventListener('click', () => {
        let sum = 0;
        const resultParagraph = document.getElementById('result');

        for (let i = 1; i <= 5; i++) {
            const numberInput = document.getElementById('number' + i);
            const checkbox = document.getElementById('check' + i);

            if (checkbox.checked) {
                const numberValue = parseInt(numberInput.value, 10);
                
                if (!isNaN(numberValue)) {
                    sum += numberValue;
                }
            }
        }

        if (sum === 0) {
            resultParagraph.textContent = 'Proszę zaznaczyć przynajmniej jeden checkbox z liczbą.';
        } else {
            resultParagraph.textContent = 'Suma zaznaczonych liczb: ' + sum;
        }
    });
});
