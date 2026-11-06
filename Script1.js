const form = document.getElementById("number-form");
const numberInput = document.getElementById("number-input");
const results = document.getElementById("results");
const numberList = document.getElementById("number-list");
const totalSumOutput = document.getElementById("total-sum");
const multipleCountOutput = document.getElementById("multiple-count");
const evenSumOutput = document.getElementById("even-sum");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const n = Number(numberInput.value);
    let totalSum = 0;
    let multipleCount = 0;
    let evenSum = 0;
    numberList.replaceChildren();

    for (let number = 1; number <= n; number++) {
        totalSum += number;

        const parity = number % 2 === 0 ? "pair" : "impair";
        const listItem = document.createElement("li");
        listItem.textContent = `${number} : ${parity}`;
        numberList.appendChild(listItem);

        if (number % 3 === 0) {
            multipleCount++;
        }

        if (number % 2 === 0) {
            evenSum += number;
        }
    }

    totalSumOutput.textContent = `Somme de tous les nombres : ${totalSum}`;
    multipleCountOutput.textContent = `Nombre de multiples de 3 : ${multipleCount}`;
    evenSumOutput.textContent = `Somme des nombres pairs : ${evenSum}`;
    results.hidden = false;
});