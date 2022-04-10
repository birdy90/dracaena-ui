import DuiButton from "./DuiButton";
import React, {PropsWithChildren} from "react";
import DuiAllowedChildren from "../utils/DuiAllowedChildren";
import DuiPropsToChildren from "../utils/DuiPropsToChildren";
import DuiInput from "./DuiInput";
import IDuiColors from "../interfaces/IDuiColors";

type DuiControlGroupProps = IDuiColors & {
    className?: string,
    vertical?: boolean,
}

const DuiControlsGroup = (props: PropsWithChildren<DuiControlGroupProps>) => {
    return <div className={`${props.className} ${props.vertical ? `flex flex-col` : `flex`}`}>
        {props.children}
    </div>
}

const WithAllowedChildren = DuiAllowedChildren(DuiControlsGroup, DuiButton, DuiInput);

const joinMethod = (groupProps: PropsWithChildren<DuiControlGroupProps>, controlProps: any) => {
    const newGroupProps: any & PropsWithChildren<DuiControlGroupProps> & {stacked: boolean} = {...groupProps};
    newGroupProps.stacked = true;

    // only one prop is allowed. if control has its own setting - then remove parent definition
    if (controlProps.accent || controlProps.secondary || controlProps.alert) {
        delete newGroupProps.accent;
        delete newGroupProps.secondary;
        delete newGroupProps.alert;
    }
    return {...newGroupProps, ...controlProps};
}

export default DuiPropsToChildren(WithAllowedChildren, joinMethod);
