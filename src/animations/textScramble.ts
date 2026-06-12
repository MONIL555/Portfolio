import anime from 'animejs';

const chars = '!<>-_\\/[]{}—=+*^?#________';

export const scrambleText = (element: HTMLElement, finalString: string, duration = 800, delayOffset = 60) => {
  const finalChars = finalString.split('');
  
  element.innerHTML = '';
  const charElements: HTMLElement[] = [];
  
  finalChars.forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
    span.style.opacity = '0';
    element.appendChild(span);
    charElements.push(span);
  });

  charElements.forEach((span, index) => {
    if (finalChars[index] === ' ') {
      span.style.opacity = '1';
      return;
    }
    
    anime({
      targets: span,
      opacity: 1,
      duration: 100,
      delay: index * delayOffset,
      easing: 'linear'
    });

    anime({
      targets: span,
      innerHTML: [
        () => chars[Math.floor(Math.random() * chars.length)],
        () => chars[Math.floor(Math.random() * chars.length)],
        finalChars[index]
      ],
      duration: duration,
      delay: index * delayOffset,
      easing: 'easeOutExpo',
      round: 1,
    });
  });
};
