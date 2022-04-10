import {ChangeEventHandler, PropsWithChildren, useEffect, useState} from "react";
import {Check} from "@mui/icons-material";
import IDuiColors from "../interfaces/IDuiColors";

type Props = {
    className?: string;

    disabled?: boolean,
    thin?: boolean,
    box?: boolean,

    value?: boolean,
    onChange?: (val: boolean) => void,
};

const DuiCheckBox = (props: PropsWithChildren<Props> & IDuiColors) => {
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
        }
    } else {
        colors = {
            yes: 'bg-stone-400', no: 'bg-stone-100', border: 'border-stone-200', borderHover: 'border-stone-400',
        }
    }

    const onChange = () => {
        let newValue = !value;
        setValue(newValue);
        props.onChange && props.onChange(newValue);
    }

    return (
        <label className={`
            group select-none inline-flex items-center gap-2 cursor-pointer relative
            ${ props.disabled ? 'text-stone-200 pointer-events-none' : '' }
        `}>
            <input
                checked={ value }
                onChange={ onChange }
                className="absolute h-0 w-0 opacity-0"
                type="checkbox"
                role="switch"
                disabled={ props.disabled }
            />

            <span className={`
                flex items-center justify-center w-10  relative
                ${ props.thin ? 'h-1' : 'h-7 border-2' }
                ${ colors.border }
                ${ value || props.thin ? colors.yes : colors.no }
                ${ props.box
                    ? `w-5 h-5 rounded-md ${value ? colors.yes : '!bg-white'}`
                    : `rounded-full`
                }
            `}>
                { props.box
                    ? <Check className={`
                        !h-5 !w-5
                        ${ value ? 'text-white' : 'text-transparent group-hover:text-stone-200' }
                    `} />
                    : <span className={`
                        absolute h-5 w-5 bg-white rounded-full
                        top-1/2 -translate-y-1/2
                        transition-all shadow
                        ${ value
                            ? props.thin ? 'right-0' : 'right-0.5'
                            : props.thin ? 'right-5' : 'right-3.5'
                        }
                        ${ props.disabled ? 'shadow-stone-200' : 'shadow-stone-400' }
                    `} />
                }
            </span>

            { props.children }
        </label>
    )
}

export default DuiCheckBox;
