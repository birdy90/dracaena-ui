import React, {useEffect, useRef} from 'react';
import IDuiColors from '../interfaces/IDuiColors';

type DuiBadgeProps = {
  grey?: boolean,
  pulsating?: boolean,
  value?: number | string,
};

function DuiBadge(props: DuiBadgeProps & IDuiColors) {
  const ref = useRef(null);

  let color = { bg: 'bg-red-500', ring: 'ring-red-500' };
  if (props.accent) color = { bg: 'bg-emerald-500', ring: 'ring-emerald-500' };
  else if (props.secondary) color = { bg: 'bg-amber-500', ring: 'ring-amber-500' };
  else if (props.grey) color = { bg: 'bg-stone-400', ring: 'ring-stone-400' };

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
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
  });

  return (
    <div
      className={`
        ${color.bg} rounded-xl
        border-2 border-white shrink-0
        absolute
        ${props.value ? 'px-1 -top-2 -right-1' : 'h-4 w-4 -top-1 -right-0.5'}
        text-xs text-white
      `}
      style={{ minWidth: props.value ? '20px' : '' }}
    >
      { props.pulsating ? (
        <div
          ref={ref}
          className={`
              ring-1 ${color.ring} bg-transparent
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
