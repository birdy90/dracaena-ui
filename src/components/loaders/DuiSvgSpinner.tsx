import {useEffect} from "react";
import {randomString} from "../../utils/utils";

type DuiSvgSpinnerProps = {
  className?: string,
  dark?: boolean,
}

const DuiSvgSpinner = (props: DuiSvgSpinnerProps) => {
    const thickness = 12;
    const size = 100;

    const innerSize = size - thickness * 2;
    const half = size / 2;
    const innerHalf = innerSize / 2;

    const hash = randomString();

    useEffect(() => {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const animationClass = `animate-spin-slow`;

                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                } else {
                    entry.target.classList.remove(animationClass);
                }
            });
        });
        const observeTarget = document.querySelector(`#dui-spinner-${hash}`);
        if (observeTarget) {
          observer.observe(observeTarget);
        }
    });

    return (
        <svg
            id={`dui-spinner-${hash}`}
            width="24" height="24"
            viewBox={`0,0,${size},${size}`}
            className={`
                ${ props.dark ? 'fill-stone-400' : 'fill-stone-200' }
                ${ props.className }
            `}
        >
            <path d={`
                M ${half} 0
                A ${half} ${half} 0 1 1 0 ${half}
                L ${thickness} ${half}
                A ${innerHalf} ${innerHalf} 0 1 0 ${half} ${thickness}
            `} />
        </svg>
    );
};

export default DuiSvgSpinner;
