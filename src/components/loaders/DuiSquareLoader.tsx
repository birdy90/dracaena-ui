import '../../animations/ripple.css';
import React, { useEffect } from 'react';
import IDuiColors from '../../interfaces/IDuiColors';
import { randomString } from '../../utils/utils';

type Props = {
  animation?: 'scale' | 'flip' | 'fade',
  random?: boolean
};

function DuiSquareLoader(props: Props & IDuiColors) {
  const { accent, secondary, random, animation, alert } = props;
  const size = random ? 4 : 3;
  const iterationList = [...Array(size)].map((t, i) => i);
  const hash = randomString();

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
    const observeTarget = document.querySelector(`#dui-loader-${hash}`);
    if (observeTarget) {
      observer.observe(observeTarget);
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
    <div id={`dui-loader-${hash}`} className="w-10 h-10 grid shrink-0" style={gridStyles}>
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
