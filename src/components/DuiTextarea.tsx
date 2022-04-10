import React, {useEffect, useState} from "react";
import {randomString} from "../utils/utils";
import IDuiColors from "../interfaces/IDuiColors";

type Props = {
  className?: string,
  type?: string,
  value?: string,
  readonly?: boolean,
  disabled?: boolean,
  placeholder?: string,
  rows?: number,
  label?:string,

  stacked?: boolean,
  code?: boolean,

  isFocused?: boolean,
  onFocus?: Function,
  onBlur?: Function,
  onChange?: (val: string) => void,
}

const DuiTextarea = (props: Props & IDuiColors) => {
  const inputElement = React.createRef<HTMLTextAreaElement>();
  const inputHash = randomString();
  const [value, setValue] = useState(props.value ?? '');
  const [isFocused, setFocused] = useState(Boolean(props.isFocused));

  if (props.value !== undefined && props.value !== value) setValue(props.value || '');
  const rows = props.rows || 2;

  const onFocus = () => {
    if (isFocused) return;

    setFocused(true);
    props.onFocus && props.onFocus();

    if (inputElement && inputElement.current) {
      inputElement.current.focus();
    }
  }

  const onBlur = () => {
    setFocused(false);
    props.onBlur && props.onBlur();
  }

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange(e.target.value);
  }

  const colorClasses = props.accent ? `
        border-emerald-300
    ` : props.secondary ? `
        border-amber-300
    ` : props.alert ? `
        border-red-300
    ` : `
        border-stone-400
    `;

  const stackedClasses = props.stacked ? `
        first:rounded-t-[20px] last:rounded-b-[20px]
        border-y border-white/20
    ` : 'rounded-[20px]';

  const inputProps = {
    readOnly: props.readonly || false,
    placeholder: props.placeholder,
    className: `
            w-full px-4 py-2
            focus:outline-0
            focus-visible:outline-0
            resize-none
            ${ props.disabled
      ? 'text-stone-200 placeholder:text-stone-200'
      : 'placeholder:text-stone-400'
    }
            ${ props.code ? 'font-mono' : '' }
        `,
    rows,

    value,

    onFocus,
    onBlur,
    onChange,
  };

  useEffect(() => {
    if (!inputElement.current) return;

    inputElement.current.style.height = "0px";
    const scrollHeight = inputElement.current.scrollHeight;
    inputElement.current.style.height = `min(${scrollHeight + 25}px, 75vh)`;
  }, [value]);

  return (
    <div className="flex flex-col gap-1">
      { props.label ? <label htmlFor={`dui-textarea-${inputHash}`} className="text-sm cursor-pointer mr-auto">
        { props.label }
      </label> : null }

      <span
        className={`
            min-h-[40px] w-full
            border cursor-text transition-colors
            ${ stackedClasses }
            ${ isFocused ? colorClasses : 'border-stone-200' }
            ${ props.disabled ? 'pointer-events-none' : '' }
            relative overflow-hidden
            ${props.className}
        `}
        onClick={onFocus}
      >
          <textarea ref={inputElement} id={`dui-textarea-${inputHash}`} {...inputProps} />
      </span>
    </div>
  );
};

export default DuiTextarea;
