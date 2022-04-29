import React, { useEffect, useRef } from 'react';

type DuiSvgSpinnerProps = {
  className?: string,
  dark?: boolean,
};

function DuiSvgSpinner(props: DuiSvgSpinnerProps) {
  const thickness = 12;
  const size = 100;

  const innerSize = size - thickness * 2;
  const half = size / 2;
  const innerHalf = innerSize / 2;

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const animationClass = 'animate-spin-slow';

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
  });

  return (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox={`0,0,${size},${size}`}
      className={`
                ${props.dark ? 'fill-stone-400' : 'fill-stone-200'}
                ${props.className}
            `}
    >
      <path d={`
                M ${half} 0
                A ${half} ${half} 0 1 1 0 ${half}
                L ${thickness} ${half}
                A ${innerHalf} ${innerHalf} 0 1 0 ${half} ${thickness}
            `}
      />
    </svg>
  );
}

export default DuiSvgSpinner;
