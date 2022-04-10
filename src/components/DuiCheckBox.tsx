import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Check } from '@mui/icons-material';
import IDuiColors from '../interfaces/IDuiColors';

type Props = {
  disabled?: boolean,
  thin?: boolean,
  box?: boolean,

  value?: boolean,
  onChange?: (val: boolean) => void,
};

function DuiCheckBox(props: PropsWithChildren<Props> & IDuiColors) {
  const [value, setValue] = useState(props.value ?? false);

  useEffect(() => {
    setValue(props.value || false);
  }, [props.value]);

  let colors;
  if (props.accent) {
    colors = {
      yes: 'bg-emerald-500', no: 'bg-emerald-200/50', border: 'border-emerald-300', borderHover: 'border-emerald-500',
    };
  } else if (props.secondary) {
    colors = {
      yes: 'bg-amber-500', no: 'bg-amber-200/50', border: 'border-amber-300', borderHover: 'border-amber-500',
    };
  } else if (props.alert) {
    colors = {
      yes: 'bg-red-500', no: 'bg-red-200/50', border: 'border-red-300', borderHover: 'border-red-500',
    };
  } else if (props.disabled) {
    colors = {
      yes: 'bg-stone-100', no: 'bg-stone-100', border: 'border-stone-100', borderHover: 'border-stone-100',
    };
  } else {
    colors = {
      yes: 'bg-stone-400', no: 'bg-stone-100', border: 'border-stone-200', borderHover: 'border-stone-400',
    };
  }

  const onChange = () => {
    const newValue = !value;
    setValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const labelClasses = `group select-none inline-flex items-center gap-2 cursor-pointer relative
    ${props.disabled ? 'text-stone-200 pointer-events-none' : ''}`;

  const boxClasses = props.box ? `w-5 h-5 rounded-md ${value ? colors.yes : '!bg-white'}` : 'rounded-full';
  const switchClasses = `flex items-center justify-center w-10  relative
    ${props.thin ? 'h-1' : 'h-7 border-2'} ${colors.border}
    ${value || props.thin ? colors.yes : colors.no} ${boxClasses}
  `;

  const switchCheckmarkClasses = `!h-5 !w-5 ${value ? 'text-white' : 'text-transparent group-hover:text-stone-200'}`;

  const switchInnerWithValue = props.thin ? 'right-0' : 'right-0.5';
  const switchInnerWithoutValue = props.thin ? 'right-5' : 'right-3.5';
  const switchInnerClasses = `absolute h-5 w-5 bg-white rounded-full top-1/2 -translate-y-1/2 transition-all shadow
    ${value ? switchInnerWithValue : switchInnerWithoutValue}
    ${props.disabled ? 'shadow-stone-200' : 'shadow-stone-400'}`;

  return (
    <label className={labelClasses}>
      <input
        checked={value}
        onChange={onChange}
        className="absolute h-0 w-0 opacity-0"
        type="checkbox"
        disabled={props.disabled}
      />

      <span className={switchClasses}>
        { props.box
          ? <Check className={switchCheckmarkClasses} />
          : <span className={switchInnerClasses} /> }
      </span>

      { props.children }
    </label>
  );
}

export default DuiCheckBox;
