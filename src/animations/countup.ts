import anime from 'animejs';

export const countUp = (element: HTMLElement, targetValue: number, prefix = '', suffix = '') => {
  const obj = { val: 0 };
  const isFloat = targetValue % 1 !== 0;
  
  anime({
    targets: obj,
    val: targetValue,
    round: isFloat ? 100 : 1, // To support 2 decimal places if float
    duration: 2000,
    easing: 'easeOutExpo',
    update: () => {
      const displayVal = isFloat ? (obj.val).toFixed(2) : Math.floor(obj.val);
      element.innerHTML = `${prefix}${displayVal}${suffix}`;
    }
  });
};
