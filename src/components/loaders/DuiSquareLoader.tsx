import '../../animations/ripple.css';
import React, { useEffect, useRef } from 'react';
import IDuiColors from '../../interfaces/IDuiColors';

type Props = {
  animation?: 'scale' | 'flip' | 'fade',
  random?: boolean
};

function DuiSquareLoader(props: Props & IDuiColors) {
  const { accent, secondary, random, animation, alert } = props;
  const size = random ? 4 : 3;
  const iterationList = [...Array(size)].map((t, i) => i);
  const ref = useRef(null);

  const animations = {
    scale: 'ripple-scale-animation',
    flip: 'ripple-flip-animation',
    fade: 'ripple-fade-animation',
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const animationClass = animations[animation || 'scale'];
        const items = entry.target.querySelectorAll('*');

        if (entry.isIntersecting) {
          items.forEach((t) => {
            t.classList.add(animationClass);
          });
        } else {
          items.forEach((t) => {
            t.classList.remove(animationClass);
          });
        }
      });
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
  });

  const gridStyles = {
    gridTemplateColumns: `repeat(${size}, 1fr)`,
    gridTemplateRows: `repeat(${size}, 1fr)`,
    gap: '2px',
  };

  let colorClasses = 'bg-stone-400';
  if (accent) colorClasses = 'bg-emerald-500';
  else if (secondary) colorClasses = 'bg-amber-500';
  else if (alert) colorClasses = 'bg-red-500';
  const cellClasses = `transition-translate shrink-0 ${colorClasses}`;

  const cellStyles = (i: number, j: number) => ({
    willChange: 'transform',
    animationDelay: `${random ? Math.random() * 2 : (i + j) / (2 * size)}s`,
  });

  return (
    <div ref={ref} className="w-10 h-10 grid shrink-0" style={gridStyles}>
      { iterationList.map((i) => iterationList.map((j) => (
        <div
          className={cellClasses}
          style={cellStyles(size - i, j)}
          key={`cell-${i}-${j}`}
        />
      ))) }
    </div>
  );
}

export default DuiSquareLoader;
