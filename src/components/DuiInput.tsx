import React, { MouseEventHandler, PropsWithChildren, useId, useState } from 'react';
import { Clear } from '@mui/icons-material';
import IDuiColors from '../interfaces/IDuiColors';

type Props = {
  className?: string,
  type?: string,
  value?: string,
  readonly?: boolean,
  disabled?: boolean,
  placeholder?: string,
  label?: string,
  sublabel?: string,

  clearable?: boolean,
  stacked?: boolean,
  vertical?: boolean,
  borderless?: boolean,

  contentOnTheLeft?: Boolean,

  isFocused?: boolean,
  onClick?: Function,
  onFocus?: Function,
  onBlur?: Function,
  onChange?: (value: string) => void,
  onClear?: MouseEventHandler,
};

function DuiInput(props: PropsWithChildren<Props> & IDuiColors) {
  const inputElement = React.createRef<HTMLInputElement>();
  const stackedVertical = props.stacked && props.vertical;
  const stackedHorizontal = props.stacked && !props.vertical;
  const inputHash = useId();

  const [value, setValue] = useState(props.value ?? '');
  const [isFocused, setFocused] = useState(Boolean(props.isFocused));

  if (props.value !== undefined && props.value !== value) setValue(props.value || '');

  const onFocus = () => {
    if (props.onFocus) {
      props.onFocus();
    }

    if (isFocused) return;

    setFocused(true);

    if (inputElement && inputElement.current) {
      inputElement.current.focus();
    }
  };

  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
    onFocus();
  };

  const onBlur = () => {
    setFocused(false);
    if (props.onBlur) {
      props.onBlur();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.readonly) return;
    setValue(e.target.value);
    if (props.onChange) props.onChange(e.target.value);
  };

  const onClear = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (props.readonly) return;
    e.stopPropagation();
    setValue('');
    if (props.onChange) props.onChange('');
    if (props.onClear) props.onClear(e);
  };

  let colorClasses = 'border-stone-400';
  if (props.accent) colorClasses = 'border-emerald-300';
  else if (props.secondary) colorClasses = 'border-amber-300';
  else if (props.alert) colorClasses = 'border-red-300';

  let stackedClasses = 'rounded-[20px] px-4';
  if (stackedVertical) {
    stackedClasses = 'first:rounded-t-[20px] last:rounded-b-[20px] border-y border-white/20';
  } else if (stackedHorizontal) {
    stackedClasses = `first:rounded-l-[20px] last:rounded-r-[20px]
    border-x border-white/20 px-2 first:pl-4 last:pr-4`;
  }

  const inputClasses = `w-full  focus:outline-0 focus-visible:outline-0
    ${props.disabled ? 'text-stone-200 placeholder:text-stone-200' : 'placeholder:text-stone-400'}`;

  const inputProps = {
    ref: inputElement,
    type: props.type || 'text',
    readOnly: props.readonly || false,
    placeholder: props.placeholder,
    style: { cursor: 'inherit' },
    className: inputClasses,
    value,

    onFocus,
    onBlur,
    onChange,
  };

  const inputComponent = (
    <div
      className={`
                flex items-center gap-2 grow h-10 transition-colors
                ${props.readonly ? 'cursor-pointer' : 'cursor-text'}
                ${stackedClasses}
                ${props.borderless ? '' : 'border'}
                ${props.borderless && !props.stacked ? 'px-0' : ''}
                ${isFocused ? colorClasses : 'border-stone-200'}
                ${props.disabled ? 'pointer-events-none' : ''}
                ${props.className}
            `}
      onClick={onClick}
    >
      <input id={inputHash} {...inputProps} />

      {props.clearable && !props.readonly && value
        ? <Clear onClick={onClear} />
        : null}

      {props.children ? (
        <div
          className={`
                    flex items-center gap-2
                    border-stone-200
                    ${props.contentOnTheLeft
            ? 'border-r pr-2'
            : 'border-l pl-2'}
                    ${props.contentOnTheLeft ? '-order-1' : ''}
                    ${props.disabled ? 'text-stone-200' : ''}
                `}
        >
          {props.children}
        </div>
      ) : null}
    </div>
  );

  return props.label || props.sublabel ? (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputHash} className="text-sm cursor-pointer block mr-auto">
        { props.label }
      </label>
      <label htmlFor={inputHash} className="text-xs text-stone-400 cursor-pointer block mr-auto">
        { props.sublabel }
      </label>

      { inputComponent }
    </div>
  ) : inputComponent;
}

export default DuiInput;
