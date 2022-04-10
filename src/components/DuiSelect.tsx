import DuiInput from "./DuiInput";
import {KeyboardArrowDown} from "@mui/icons-material";
import React, {ComponentType, createRef, KeyboardEventHandler, useState} from "react";
import useOnClickOutside from "../hooks/ClickOutside";
import IDuiColors from "../interfaces/IDuiColors";

type SelectProps = {
  value: IDuiSelectOption[],
  onChange: (val: IDuiSelectOption[]) => void,
  options: IDuiSelectOption[],
  opened?: boolean,
  multiselect?: boolean,
  placeholder?: string,
  className?: string,
  readonly?: boolean,
  disabled?: boolean,

  optionComponent?: ComponentType<SelectOptionProps>,
}

interface IDuiSelectOption {
  title: string;
  value: any,
  selected?: boolean,
}

type SelectOptionProps = {
  option: IDuiSelectOption,
  onSelect: () => void,
}

const DuiSelectOption = (props: SelectOptionProps) => {
  return (
    <div
      className={`
                py-2 px-4 cursor-pointer hover:bg-stone-100
                focus:bg-red-500
                ${ props.option.selected ? 'bg-stone-200' : '' }
            `}
      onClick={props.onSelect}
    >
      { props.option.title }
    </div>
  )
}

const DuiSelect = (props: SelectProps & IDuiColors) => {
  const selectRef = createRef<HTMLDivElement>();

  const OptionComponent = props.optionComponent || DuiSelectOption;

  const [dataValue, setDataValue] = useState(props.value);
  const [options, setOptions] = useState(props.options);
  const [displayedData, setDisplayedData] = useState('');
  const [areOptionsVisible, setOptionsVisibility] = useState(props.opened ?? false);

  const setNewDataValue = (val: IDuiSelectOption[]) => {
    setDataValue(val);
    props.onChange(val);
    setDisplayedData(val.map(t => t.title).join(', '));
  }

  const onOptionSelect = (optionValue: IDuiSelectOption):void => {
    let newData: any[];
    let newOptions: any[];

    if (props.multiselect) {
      newOptions = [...options];
      let optionIndex = newOptions.indexOf(optionValue);
      let newSelectedValue = !newOptions[optionIndex].selected;
      newOptions[optionIndex].selected = newSelectedValue;
      setOptions(newOptions);

      if (newSelectedValue) {
        newData = [...dataValue, optionValue];
      } else {
        newData = dataValue.filter(t => t !== optionValue);
      }
    } else {
      newData = [optionValue];
      setOptionsVisibility(false);
    }

    setNewDataValue(newData);
  }

  const onClearData = () => {
    setNewDataValue([]);
    setOptionsVisibility(false);
  }

  const onKeyUp = (e: React.KeyboardEvent<Element>) => {
    const key = e.key;
    if (key === 'Escape' || key === 'Esc') {
      setOptionsVisibility(false);

    } else if (key === 'Enter' || key === ' ') {
      setOptionsVisibility(true);

    } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
      e.preventDefault();
      if (props.multiselect) return;
      let currentIndex = options.indexOf(dataValue[0]);
      currentIndex = Math.max(0, currentIndex - 1);
      let newData = [options[currentIndex]];
      setNewDataValue(newData);

    } else if (key === 'ArrowRight' || key === 'ArrowDown') {
      e.preventDefault();
      if (props.multiselect) return;
      let currentIndex = options.indexOf(dataValue[0]);
      currentIndex = Math.min(options.length - 1, currentIndex + 1);
      let newData = [options[currentIndex]];
      setNewDataValue(newData);

    }
  }

  useOnClickOutside(selectRef, () => {
    setOptionsVisibility(false);
  });

  return (
    <div
      ref={selectRef}
      className={`
                relative
                ${props.className}
                ${props.disabled ? 'pointer-events-none' : ''}
            `}
      onKeyDown={onKeyUp}
    >
      <DuiInput
        className="cursor-pointer"
        readonly
        placeholder={props.placeholder}
        value={ displayedData }
        clearable
        onClick={() => setOptionsVisibility(!areOptionsVisible)}
        onClear={onClearData}
        {...{accent: props.accent}}
        {...{secondary: props.secondary}}
        {...{alert: props.alert}}
        {...{disabled: props.disabled}}
      >
        { props.readonly ? null : <KeyboardArrowDown /> }
      </DuiInput>

      { props.readonly ? null : <div
        className={`
            ${ areOptionsVisible ? 'block' : 'hidden' }
            overflow-y-scroll bg-white
            border border-stone-400 max-h-96 mt-2
            rounded-[20px] absolute w-full z-10
            left-0 top-full
        `}
      >
        <div className={`block h-full py-2`}>
          {options.map((t, i) => (
            <OptionComponent
              option={t}
              onSelect={() => onOptionSelect(t)}
              key={i}
            />
          ))}
        </div>
      </div> }
    </div>
  );
};

export default DuiSelect;

export {
  IDuiSelectOption,
  SelectOptionProps,
};
