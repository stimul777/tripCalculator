import Calc from './calc';

class Validation extends Calc {
    validEvent() {
        const elementsInput = [
            this.distance,
            this.price,
            this.consumption100,
            this.pointA,
            this.pointB,
            this.liters,
            this.distanceConsumption,
        ];

        elementsInput.forEach(elem =>
            elem.addEventListener('input', () => {
                if (elem != this.pointA && elem != this.pointB && elem.value.replace(/[^\d]/g, '') === '')
                    return (elem.value = '');

                if (elem == this.pointA || elem == this.pointB) {
                    if (!isNaN(elem.value)) return (elem.value = '');
                }
            }),
        );
    }
}

let valid = new Validation();
valid.validEvent();
