class Calc {
    constructor() {
        this.distance = document.getElementById('distance'); //расстояние
        this.consumption100 = document.getElementById('consumption'); //расход литров на 100км
        this.price = document.getElementById('price'); //цена за 1 л
        this.output = document.getElementById('output'); //результат
        // buttons
        this.btnConsider = document.getElementById('consider'); //кнопка подсчитать
        // checkbox
        this.checkInBothDirections = document.getElementById('checkInBothDirections');
        // elements
        this.calcConsumptionElem = document.getElementsByClassName('calc-consumption')[0];

        this.btnConsider.addEventListener('click', () => {
            this.calculation();
        });
        this.checkInBothDirections.addEventListener('click', () => {
            this.modalWindowConsumption();
        });
    }

    calculation() {
        this.output.innerHTML =
            Math.round((this.consumption100.value * this.distance.value * this.price.value) / 100) + ' рублей';
    }

    modalWindowConsumption() {
        this.checkInBothDirections.checked
            ? (this.calcConsumptionElem.style.display = 'block')
            : (this.calcConsumptionElem.style.display = 'none');
    }
}

new Calc();
