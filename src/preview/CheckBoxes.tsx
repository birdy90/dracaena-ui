import { useState } from 'react';
import DuiCheckBox from '../components/DuiCheckBox';
import DuiContainer from '../components/layout/DuiContainer';

function CheckBoxes() {
  const [value, setValue] = useState(false);

  return (
    <DuiContainer centered className="flex flex-col gap-2">
      <h2>Check boxes</h2>

      <div className="grid grid-flow-col grid-rows-5 gap-2">
        <p>Switch</p>
        <DuiCheckBox value={value} onChange={setValue} accent>Accent checkbox</DuiCheckBox>
        <DuiCheckBox value={value} onChange={setValue} secondary>Secondary checkbox</DuiCheckBox>
        <DuiCheckBox value={value} onChange={setValue} alert>Alert checkbox</DuiCheckBox>
        <DuiCheckBox value={value} onChange={setValue}>Common checkbox</DuiCheckBox>

        <p>Thin</p>
        <DuiCheckBox value={value} onChange={setValue} thin accent>Accent checkbox</DuiCheckBox>
        <DuiCheckBox value={value} onChange={setValue} thin secondary>Secondary checkbox</DuiCheckBox>
        <DuiCheckBox value={value} onChange={setValue} thin alert>Alert checkbox</DuiCheckBox>
        <DuiCheckBox value={value} onChange={setValue} thin>Common checkbox</DuiCheckBox>

        <p>Box</p>
        <DuiCheckBox value={value} onChange={setValue} box accent>Accent checkbox</DuiCheckBox>
        <DuiCheckBox value={value} onChange={setValue} box secondary>Secondary checkbox</DuiCheckBox>
        <DuiCheckBox value={value} onChange={setValue} box alert>Alert checkbox</DuiCheckBox>
        <DuiCheckBox value={value} onChange={setValue} box>Common checkbox</DuiCheckBox>
      </div>

      <p>Disabled</p>

      <div className="grid grid-cols-3 gap-2">
        <DuiCheckBox value={value} onChange={setValue} disabled>Common checkbox</DuiCheckBox>
        <DuiCheckBox value={value} onChange={setValue} thin disabled>Common checkbox</DuiCheckBox>
        <DuiCheckBox value={value} onChange={setValue} box disabled>Common checkbox</DuiCheckBox>
      </div>
    </DuiContainer>
  );
}

export default CheckBoxes;
