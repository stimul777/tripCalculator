class ProgressBar {
  constructor() {
    this.inputs = [...document.querySelectorAll('#calc-container input')]
    this.progressData = 0
    this.setEventHandlers()
  }

  set progressData(data) {
    this.changeProgressView(data)
  }

  setEventHandlers() {
    this.inputs.forEach((inp) => {
      inp.addEventListener('input', this.changeProgressData.bind(this))
    })
  }

  changeProgressData() {
    this.progressData = +this.inputs.filter((inp) => inp.value).length
  }

  changeProgressView(data) {
    let sum = (100 / +this.inputs.length) * data + '%'
    document.querySelector('.progress-bar').style.width = sum
  }
}

new ProgressBar()