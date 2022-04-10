import React, { PropsWithChildren } from 'react';

type Props = {
  className?: string,
  compact?: boolean,
  noPadding?: boolean,
};

function DuiCard(props: PropsWithChildren<Props>) {
  const paddingClasses = props.compact ? 'p-4' : 'p-8';

  const cardClasses = `flex flex-col items-center bg-white shadow-lg rounded-xl
    ${props.noPadding ? '' : paddingClasses} ${props.compact ? 'gap-2' : 'gap-4'} ${props.className}`;

  return (
    <div className={cardClasses}>
      {props.children}
    </div>
  );
}

export default DuiCard;
