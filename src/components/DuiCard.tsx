import React, {MouseEventHandler, PropsWithChildren} from "react";

type Props = {
    className?: string,
    onClick?: MouseEventHandler,
    compact?: boolean,
    noPadding?: boolean,
}

const DuiCard = (props: PropsWithChildren<Props>) => {
    return (
        <div
            className={`
                flex flex-col items-center bg-white shadow-lg rounded-xl
                ${ props.noPadding ? '' : props.compact ? 'p-4' : 'p-8' }
                ${ props.compact ? 'gap-2' : 'gap-4'}
                ${ props.className }
            `}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
}

export default DuiCard;
