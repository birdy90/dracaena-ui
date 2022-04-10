import React, { PropsWithChildren, useEffect, useState } from 'react';
import IDuiColors from '../interfaces/IDuiColors';

type DuiRadioValue = boolean | string | number | undefined;

interface IDuiRadioOption {
  title: string,
  value: DuiRadioValue,
}
type DuiRadioOptionProps = {
  value: DuiRadioValue,
  disabled?: boolean,
  checked?: boolean,
  onChange?: (val: DuiRadioValue) => void,
};

type Props = {
  className?: string;

  disabled?: boolean,

  value?: DuiRadioValue,
  options: IDuiRadioOption[],
  onChange?: (val: DuiRadioValue) => void,
};

function DuiRadioOption(props: PropsWithChildren<DuiRadioOptionProps> & IDuiColors) {
  let colors;
  if (props.accent) {
    colors = { yes: 'bg-emerald-500', border: 'border-emerald-300' };
  } else if (props.secondary) {
    colors = { yes: 'bg-amber-500', border: 'border-amber-300' };
  } else if (props.alert) {
    colors = { yes: 'bg-red-500', border: 'border-red-300' };
  } else if (props.disabled) {
    colors = { yes: 'bg-stone-200', border: 'border-stone-100' };
  } else {
    colors = { yes: 'bg-stone-400', border: 'border-stone-400' };
  }

  return (
    <label
      className="group flex items-center gap-2 cursor-pointer select-none"
      onClick={() => props.onChange && props.onChange(props.value)}
    >
      <span className={`
                flex items-center justify-center h-5 w-5 rounded-full
                border-2
                ${colors.border}
            `}
      >
        <span className={`
                    h-2 w-2 rounded-full
                    transition-transform
                    ${colors.yes}
                    ${props.checked ? 'scale-1' : 'scale-0'}
                `}
        />
      </span>

      { props.children }
    </label>
  );
}

function DuiRadioGroup(props: Props & IDuiColors) {
  const [value, setValue] = useState(props.value ?? undefined);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onChange = (newValue: DuiRadioValue) => {
    setValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  return (
    <div className={`
            flex gap-2 flex-col
            ${props.disabled ? 'text-stone-200 pointer-events-none' : ''}
        `}
    >
      { props.options.map((t, i: number) => (
        <DuiRadioOption
          {...{ accent: props.accent }}
          {...{ secondary: props.secondary }}
          {...{ alert: props.alert }}
          {...{ disabled: props.disabled }}
          value={t.value}
          checked={value === t.value}
          onChange={onChange}
          key={i}
        >
          { t.title }
        </DuiRadioOption>
      ))}

    </div>
  );
}

export default DuiRadioGroup;
export { IDuiRadioOption, DuiRadioValue };
