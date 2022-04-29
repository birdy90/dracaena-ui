import '../../animations/ripple.css';
import React, { useEffect, useRef } from 'react';
import IDuiColors from '../../interfaces/IDuiColors';

type Props = {
  animation?: 'scale' | 'flip' | 'fade',
  random?: boolean
};

type CellRef = [HTMLDivElement | null, number, number];
type CellStylesResponse = { willChange: string, animationDelay: string };

function DuiSquareLoader(props: Props & IDuiColors) {
  const { accent, secondary, random, animation, alert } = props;
  const size = random ? 4 : 3;
  const iterationList = [...Array(size)].map((t, i) => i);
  const gridRef = useRef<HTMLDivElement>(null);

  const cellRefs = useRef<Array<CellRef>>([]);

  const animations = {
    scale: 'ripple-scale-animation',
    flip: 'ripple-flip-animation',
    fade: 'ripple-fade-animation',
  };

  function cellStyles(i: number, j: number): CellStylesResponse {
    return {
      willChange: 'transform',
      animationDelay: `${random ? Math.random() * 2 : (i + j) / (2 * size)}s`,
    };
  }

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

    if (gridRef.current) {
      observer.observe(gridRef.current);
      gridRef.current.style.gridAutoColumns = `repeat(${size}, 1fr)`;
      gridRef.current.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    }

    cellRefs.current.forEach((item) => {
      const [cell, i, j] = item;
      if (cell) {
        const styles = cellStyles(size - i, j);
        cell.style.willChange = styles.willChange;
        cell.style.animationDelay = styles.animationDelay;
      }
    });
  });

  let colorClasses = 'bg-stone-400';
  if (accent) colorClasses = 'bg-emerald-500';
  else if (secondary) colorClasses = 'bg-amber-500';
  else if (alert) colorClasses = 'bg-red-500';
  const cellClasses = `transition-translate shrink-0 ${colorClasses}`;

  return (
    <div ref={gridRef} className="w-10 h-10 grid shrink-0 gap-0.5">
      { iterationList.map((i) => iterationList.map((j) => (
        <div
          ref={(el) => { cellRefs.current[i] = [el, i, j]; }}
          className={cellClasses}
          key={`cell-${i}-${j}`}
        />
      ))) }
    </div>
  );
}

export default DuiSquareLoader;
