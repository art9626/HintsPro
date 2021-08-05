(() => {
  document.addEventListener('DOMContentLoaded', () => {

    function counter(maxValue, countDisplay) {
      let value;

      countDisplay.textContent = '1';

      let timerId = setInterval(() => {
        value = +countDisplay.textContent;

        if (value === Math.floor(maxValue * 0.8)) {
          clearTimeout(timerId);

          timerId = setInterval(() => {
            value = +countDisplay.textContent;

            if (value === Math.floor(maxValue * 0.95)) {
              clearTimeout(timerId);

              timerId = setInterval(() => {
                value = +countDisplay.textContent;

                if (value === maxValue) {
                  clearTimeout(timerId);

                  return;
                }

                countDisplay.textContent = String(value + 1);
              }, 15000 / maxValue);
            }

            countDisplay.textContent = String(value + 1);
          }, 10000 / maxValue);
        }

        countDisplay.textContent = String(value + 1);
      }, 3000 / maxValue);
    }




    const counters = document.querySelectorAll('.section-number__title');

    scrollActive(counters[0]);
    scrollActive(counters[1]);
    scrollActive(counters[2]);

    function scrollActive(count) {
      window.addEventListener('scroll', () => {

        if (((count.getBoundingClientRect().y - window.innerHeight) < 0) && count.classList.contains('_true')) {

          count.classList.remove('_true');
          counter(+count.textContent, count);
        }
      });
    }



    
  })
})();