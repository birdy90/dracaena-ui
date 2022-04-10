import { Link } from 'react-router-dom';
import React, { PropsWithChildren, ReactNode } from 'react';
import DuiSvgSpinner from './loaders/DuiSvgSpinner';
import IDuiColors from '../interfaces/IDuiColors';

type Props = {
  className?: string;

  iconButton?: any,
  onClick?: any,
  disabled?: any,
  link?: any,
  target?: any,
  loading?: boolean,

  stacked?: boolean,
  vertical?: boolean, // only if stacked button
};

function DuiButton(props: PropsWithChildren<Props> & IDuiColors) {
  const stackedVertical = props.stacked && props.vertical;
  const stackedHorizontal = props.stacked && !props.vertical;
  const isColorSpecified = props.accent || props.secondary || props.alert;

  let colorClasses = `bg-stone-200 text-stone-800
    hover:bg-stone-100 active:bg-stone-200`;
  if (props.accent) {
    colorClasses = `bg-emerald-500 text-white
    hover:bg-emerald-300 hover:text-stone-800 active:bg-emerald-200`;
  } else if (props.secondary) {
    colorClasses = `bg-amber-500 text-white
    hover:bg-amber-300 hover:text-stone-800 active:bg-amber-200`;
  } else if (props.alert) {
    colorClasses = `bg-red-500 text-white
    hover:bg-red-300 hover:text-stone-800 active:bg-red-200`;
  }

  let stackedClasses = 'rounded-[20px]';
  if (stackedVertical) stackedClasses = 'first:rounded-t-[20px] last:rounded-b-[20px] border-y border-white/20';
  else if (stackedHorizontal) {
    stackedClasses = `first:rounded-l-[20px] last:rounded-r-[20px]
    border-x border-white/20 first:pl-4 last:pr-4`;
  }

  const hasTextChild = () => {
    if (!props.children) return false;
    if (typeof props.children === 'string') return true;

    const childArray = React.Children.toArray(props.children);
    return childArray.some((t) => typeof t === 'string');
  };

  const wrapInLink = (button: ReactNode) => {
    if (props.target) {
      return <a href={props.link} target={props.target} rel="noreferrer">{button}</a>;
    }
    return <Link to={props.link}>{button}</Link>;
  };

  const buttonItem = (
    <button
      className={`
                inline-flex gap-2 items-center justify-center align-middle
                transition-colors py-2
                disabled:bg-stone-100 disabled:text-stone-400/50
                relative select-none
                ${(stackedVertical || !props.stacked) && hasTextChild() ? 'px-4' : 'px-2'}
                ${colorClasses}
                ${stackedClasses}
                ${props.loading ? 'text-transparent hover:text-transparent pointer-events-none' : ''}
            `}
      onClick={props.onClick}
      disabled={props.disabled}
      type="button"
    >
      { props.loading
        ? <DuiSvgSpinner {...{ dark: !isColorSpecified }} className={props.children ? 'absolute' : ''} />
        : null }
      { props.children }
    </button>
  );

  if (props.link) {
    return wrapInLink(buttonItem);
  }
  return buttonItem;
}

export default DuiButton;
