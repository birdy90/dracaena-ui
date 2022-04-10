import React, { PropsWithChildren } from 'react';

type DuiContainerProps = {
  className?: string,
  narrow?: boolean,
  centered?: boolean,
};

function DuiContainer(props: PropsWithChildren<DuiContainerProps>) {
  return (
    <div
      className={`
                w-full
                ${
                    props.narrow
                      ? 'max-w-2xl'
                      : 'px-4 sm:px-8 xl:px-0 xl:max-w-7xl'
                }
                ${props.centered ? 'mx-auto' : ''}
                ${props.className}
            `}
    >
      {props.children}
    </div>
  );
}

export default DuiContainer;
