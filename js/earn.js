const animateEarn = () => {
    const money = document.querySelector('.course__progress-label .course__number');
    const progress = document.querySelector('.course__progress-element progress');

    let currentMoney = 0;
    let currentStep = 0;
    const duration = 2000;
    const maxMoney = 600000
    const minMoney = 35000
    const targetMoney = Math.floor(Math.random() * (maxMoney - minMoney + 1)) + minMoney
    const steps = 50;
    const stepValue = targetMoney / steps;
    const stepDuration = duration / steps;

    const animate = () => {
        if (currentStep <= steps) {
            currentMoney = Math.round(stepValue * currentStep);

            money.textContent = `${currentMoney.toLocaleString('ru-RU')}₽`;

            progress.value = currentMoney;

            currentStep++;
            setTimeout(animate, stepDuration);
        }
    }
    animate();
}

document.addEventListener('DOMContentLoaded', animateEarn);