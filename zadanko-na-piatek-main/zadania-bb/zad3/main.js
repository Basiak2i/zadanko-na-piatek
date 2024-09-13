document.addEventListener('DOMContentLoaded', () => {
    const resultParagraph = document.getElementById('result');

    function getNumbers() {
        const inputA = document.getElementById('a').value;
        const inputB = document.getElementById('b').value;

        const numberA = parseFloat(inputA);
        const numberB = parseFloat(inputB);

        if (isNaN(numberA) || isNaN(numberB)) {
            resultParagraph.textContent = 'Proszę wpisać obie liczby.';
            return null;
        }
        return [numberA, numberB];
    }

    document.getElementById('add').addEventListener('click', () => {
        const numbers = getNumbers();
        if (numbers) {
            const [a, b] = numbers;
            resultParagraph.textContent = `Wynik dodawania: ${a + b}`;
        }
    });

    document.getElementById('subtract').addEventListener('click', () => {
        const numbers = getNumbers();
        if (numbers) {
            const [a, b] = numbers;
            resultParagraph.textContent = `Wynik odejmowania: ${a - b}`;
        }
    });

    document.getElementById('multiply').addEventListener('click', () => {
        const numbers = getNumbers();
        if (numbers) {
            const [a, b] = numbers;
            resultParagraph.textContent = `Wynik mnożenia: ${a * b}`;
        }
    });

    document.getElementById('divide').addEventListener('click', () => {
        const numbers = getNumbers();
        if (numbers) {
            const [a, b] = numbers;
            if (b === 0) {
                resultParagraph.textContent = 'Nie można dzielić przez zero.';
            } else {
                resultParagraph.textContent = `Wynik dzielenia: ${a / b}`;
            }
        }
    });

    document.getElementById('modulus').addEventListener('click', () => {
        const numbers = getNumbers();
        if (numbers) {
            const [a, b] = numbers;
            resultParagraph.textContent = `Reszta z dzielenia: ${a % b}`;
        }
    });

    document.getElementById('integerDivide').addEventListener('click', () => {
        const numbers = getNumbers();
        if (numbers) {
            const [a, b] = numbers;
            if (b === 0) {
                resultParagraph.textContent = 'Nie można dzielić przez zero.';
            } else {
                resultParagraph.textContent = `Wynik dzielenia całkowitego: ${Math.floor(a / b)}`;
            }
        }
    });
});
