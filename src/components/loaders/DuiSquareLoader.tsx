import '../../animations/ripple.css';
import IDuiColors from "../../interfaces/IDuiColors";
import {randomString} from "../../utils/utils";
import {useEffect} from "react";

type Props = {
    type?: 'scale' | 'flip' | 'fade',
    random?: boolean
}

const DuiSquareLoader = (props: Props & IDuiColors) => {
    const size = props.random ? 4 : 3;
    const iterationList = [...Array(size)].map((t, i) => i);
    const type = props.type || 'scale';
    const hash = randomString();

    useEffect(() => {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const animationClass = `ripple-${type}-animation`;
                const items = entry.target.querySelectorAll('*');

                if (entry.isIntersecting) {
                    items.forEach(t => {
                        t.classList.add(animationClass);
                    });
                } else {
                    items.forEach(t => {
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
        gap: `2px`,
    };

    const cellClasses = `
        transition-translate
        shrink-0
        ${
            props.accent ? 'bg-emerald-500' :
            props.secondary ? 'bg-amber-500' :
            props.alert ? 'bg-red-500' :
            'bg-stone-400'
        }
    `;
    const cellStyles = (i: number, j: number) => ({
        willChange: 'transform',
        animationDelay: `${props.random ? Math.random() * 2 : (i + j) / (2 * size)}s`,
    });

    return (
        <div id={`dui-loader-${hash}`} className="w-10 h-10 grid shrink-0" style={gridStyles}>
            { iterationList.map(i => iterationList.map(j => (
                <div
                    className={cellClasses}
                    style={cellStyles(size-i, j)}
                    key={`cell-${i}-${j}`}
                />
            ))) }
        </div>
    );
}

export default DuiSquareLoader;
