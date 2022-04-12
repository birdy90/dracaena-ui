import React, { useEffect } from 'react';
import { randomString } from '../utils/utils';
import IDuiColors from '../interfaces/IDuiColors';

type DuiBadgeProps = {
  grey?: boolean,
  pulsating?: boolean,
  value?: number | string,
};

function DuiBadge(props: DuiBadgeProps & IDuiColors) {
  const hash = randomString();

  let color = 'bg-red-500 ring-red-500';
  if (props.accent) color = 'bg-emerald-500 ring-emerald-500';
  else if (props.secondary) color = 'bg-amber-500 ring-amber-500';
  else if (props.grey) color = 'bg-stone-400 ring-stone-400';

  useEffect(() => {
    if (props.pulsating) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const animationClass = 'animate-contour';

          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          } else {
            entry.target.classList.remove(animationClass);
          }
        });
      });
      const observeTarget = document.querySelector(`#dui-badge-pulse-${hash}`);
      if (observeTarget) {
        observer.observe(observeTarget);
      }
    }
  });

  return (
    <div
      className={`
        ${color} rounded-xl
        border-2 border-white shrink-0
        absolute
        ${props.value ? 'px-1 -top-2 -right-1' : 'h-4 w-4 -top-1 -right-0.5'}
        text-xs text-white
      `}
      style={{ minWidth: props.value ? '20px' : '' }}
    >
      { props.pulsating ? (
        <div
          id={`dui-badge-pulse-${hash}`}
          className={`
              ring-1 ${color} bg-transparent
              absolute top-0 left-0 w-full h-full
              rounded-xl
          `}
        />
      ) : null}
      { props.value && !Number.isNaN(props.value) && props.value > 99 ? '99+' : props.value }
    </div>
  );
}

export default DuiBadge;
