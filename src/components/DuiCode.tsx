import React, { PropsWithChildren } from 'react';

type DuiCodeProps = {
  inline?: boolean,
};

function DuiCode(props: PropsWithChildren<DuiCodeProps>) {
  return (
    <code className={`
            bg-stone-100 rounded-xl
            ${props.inline ? 'inline px-2 py-1' : ' block w-full px-4 py-2'}
        `}
    >
      {
        props.inline
          ? props.children
          : <pre>{props.children}</pre>
      }
    </code>
  );
}

export default DuiCode;
