import React, { useEffect } from 'react';
import anime from 'animejs';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      anime({
        targets: '.preloader-top',
        translateY: '-100%',
        duration: 600,
        easing: 'easeInOutExpo'
      });
      anime({
        targets: '.preloader-bottom',
        translateY: '100%',
        duration: 600,
        easing: 'easeInOutExpo',
        complete: () => {
          document.body.style.overflow = 'auto';
          onComplete();
        }
      });
    }, 2800);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col pointer-events-none">
      <div className="preloader-top flex-1 bg-darkNavy w-full flex items-end justify-center pb-8 relative overflow-hidden z-10">
        <div className="absolute bottom-[-40px] text-6xl font-display font-bold gradient-text tracking-widest">
          {`{ MS }`}
        </div>
      </div>
      <div className="preloader-bottom flex-1 bg-darkNavy w-full flex items-start justify-center pt-8 relative overflow-hidden z-10">
        <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-electricViolet to-neonCyan origin-left" style={{ animation: 'fillBar 2.5s ease-out forwards' }}></div>
        <style>{`
          @keyframes fillBar {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
        `}</style>
      </div>
    </div>
  );
};
