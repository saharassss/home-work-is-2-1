const calculate = () => {

    const inputBricks = parseInt(document.querySelector('#bricks').value);
    const inputBricksPricing = parseInt(document.querySelector('#bricks_pricing').value);
    const inputCement = parseInt(document.querySelector('#cement').value);
    const inputCtmentPricing = parseInt(document.querySelector('#cement_pricing').value);
    const inputWoodboards = parseInt(document.querySelector('#woodboards').value);
    const inputWoodboardsPricing = parseInt(document.querySelector('#cement_woodboards').value);

    if (isNaN(inputBricks) || isNan(inputCement) || isNaN(inputWoodboards) || isNaN(inputBricksPricing) || isNaN(inputCtmentPricing) || isNaN(inputWoodboardsPricing)) {
        alert("Заполните все поля!!!");
        return;
    };

    if (0 > inputBricks || 0 > inputCement > 0 || 0 > inputWoodboards) {
        alert("Количесвто материалов должно быть больше 0!");
        return;
    };

    if ((0 >= inputBricksPricing && inputBricks > 0) || (0 >= inputCtmentPricing && inputCement > 0) || (0 >= inputWoodboardsPricing && inputWoodboards > 0)) {
        alert("Цена не может равняться 0 или меньше!");
        return;
    };

    let priceSum = (inputBricks * inputBricksPricing) + (inputCement * inputCtmentPricing) + (inputWoodboards + inputWoodboardsPricing);

    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `
    <p> Стоимость кирпичей: $${priceSum["bricks"].toFixed(2)}</p>
    <p> Стоимость цемента: $${priceSum["cement"].toFixed(2)}</p>
    <p> Стоимость досок: $${priceSum["woodboards"].toFixed(2)}</p>
    <p> Конечная стоимость: $${priceSum.toFixed(2)}</p>`;
};

