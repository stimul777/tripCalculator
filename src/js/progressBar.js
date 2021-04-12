import Calc from './calc';
class ProgressBar extends Calc {
    changeProgress() {
        const elementsInput = [
            this.distance,
            this.price,
            this.consumption100,
            this.pointA,
            this.pointB,
            this.distanceConsumption,
            this.liters,
            this.distanceConsumption,
        ];

        let progressValPercent = 20;

        this.checkInBothDirections.addEventListener('click', () => {
            if (this.checkInBothDirections.checked) {
                progressValPercent = 14;
            }
        });

        let elemObj = elementsInput.map(
            m =>
                (m = {
                    el: m,
                    status: false,
                }),
        );

        elemObj.forEach(f => {
            f.el.addEventListener('input', () => {
                if (f.el.value != '' && !f.el.status) {
                    f.el.status = true;
                    this.progressValue.value = this.progressValue.value + progressValPercent;
                } else if (f.el.value == '') {
                    f.el.status = false;
                    this.progressValue.value = this.progressValue.value - progressValPercent;
                }
            });
        });
    }
}

let progress = new ProgressBar();
progress.changeProgress();
