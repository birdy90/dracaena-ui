import { ExpandLess } from '@mui/icons-material';
import React, { useRef } from 'react';

type DuiAccordionItemProps = {
  isOpened?: boolean,
  toggleOpened?: () => void,
  title: string,
  children: any,
  badge?: any,
};

function DuiAccordionItem(props: DuiAccordionItemProps) {
  const ref = useRef<HTMLElement>(null);
  const toggleOpened = () => {
    if (props.toggleOpened) {
      props.toggleOpened();
    }
  };

  const headerClasses = `
    flex items-center justify-between px-4 py-2
    bg-stone-100 select-none cursor-pointer
  `;

  if (ref.current) {
    ref.current.style.borderRadius = 'inherit';
  }

  return (
    <div
      className="
          border border-stone-200 border-b-0 last:border-b
          first:rounded-t-xl last:rounded-b-xl
          relative
      "
    >
      <header
        ref={ref}
        className={headerClasses}
        onClick={() => toggleOpened()}
      >
        <span>{ props.title }</span>
        <ExpandLess className={`
          transition-transform
          ${props.isOpened ? '-rotate-180' : ''}
        `}
        />
      </header>

      <div className={`border-t border-t-stone-200 p-4 pb-6 ${props.isOpened ? '' : 'hidden'}`}>
        { props.children }
      </div>

      { props.badge }
    </div>
  );
}

export default DuiAccordionItem;

export {
  DuiAccordionItemProps,
};
