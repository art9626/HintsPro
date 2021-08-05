(() => {

  function counter(maxValue, countDisplay, speed, time) {
    let value = 0;
    countDisplay.textContent = value;
    let step = (maxValue / (time / speed));

    let timerId = setInterval(() => {
      if(value >= maxValue * 0.7) {
        clearInterval(timerId);

        timerId = setInterval(() => {
          if (value >= maxValue) {
            clearInterval(timerId);
            countDisplay.textContent = maxValue;
            
            showPlus(countDisplay);
            return;
          }

          countDisplay.textContent = Math.round(value);
          value +=step;
        }, speed * 3);
      }

      countDisplay.textContent = Math.round(value);
      value +=step;
    }, speed);
  }



  function createApp() {
    const counters = document.querySelectorAll('.section-number__title');

    window.addEventListener('scroll', () => {
      counters.forEach(count => {
        if ((count.getBoundingClientRect().y - window.innerHeight) < 0 && count.classList.contains('true')) {

          count.classList.remove('true');
          counter(+count.textContent, count, 30, 1500);
        }
      })
    })
  }


  function showPlus(container) {
    container.nextElementSibling.style.opacity = '1';

    // console.log(container.nextElementSibling);
  }

  document.addEventListener('DOMContentLoaded', () => {
    createApp()
  })
})();