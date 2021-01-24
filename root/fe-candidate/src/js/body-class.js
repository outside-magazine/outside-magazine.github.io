/**
 * Body Class scroll helper
 */
/* eslint-disable */
(function () {
  let prevScrollPos = window.pageYOffset;
  let scrollDirection = null;
  const bodyEl = document.querySelector('body');

 /**
  * onScroll body class helper
  */
  const onScroll = () => {
    try {
      const currentScrollPos = window.pageYOffset;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 40) {
        if (Math.abs(prevScrollPos - currentScrollPos) > 40) {
          if (prevScrollPos >= currentScrollPos) {
            if (scrollDirection !== 'up') {
              scrollDirection = 'up';
              bodyEl.classList.remove('js-scroll-dir__down');
              bodyEl.classList.remove('js-scroll-dir__top');
              bodyEl.classList.add('js-scroll-dir__up');
            }
          } else if (scrollDirection !== 'down') {
            scrollDirection = 'down';
            bodyEl.classList.remove('js-scroll-dir__up');
            bodyEl.classList.remove('js-scroll-dir__top');
            bodyEl.classList.add('js-scroll-dir__down');
          }
        }
      } else {
        bodyEl.classList.remove('js-scroll-dir__top');
        bodyEl.classList.remove('js-scroll-dir__up');
      }
      prevScrollPos = currentScrollPos;
    } catch (error) {
      document.removeEventListener('scroll', onScroll);
      // eslint-disable-next-line
			console.error( error );
    }
  };

  document.addEventListener('scroll', onScroll);
}());
