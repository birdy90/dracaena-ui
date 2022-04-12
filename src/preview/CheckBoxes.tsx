import { useState } from 'react';
import DuiCheckBox from '../components/DuiCheckBox';
import DuiContainer from '../components/layout/DuiContainer';

function CheckBoxes() {
  const [value, setValue] = useState(false);

  return (
    <DuiContainer centered className="flex flex-col gap-2">
      <h2>Check boxes</h2>

      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col gap-2">
          <p>Switch</p>
          <DuiCheckBox value={value} onChange={setValue} accent>Accent checkbox</DuiCheckBox>
          <DuiCheckBox value={value} onChange={setValue} secondary>Secondary checkbox</DuiCheckBox>
          <DuiCheckBox value={value} onChange={setValue} alert>Alert checkbox</DuiCheckBox>
          <DuiCheckBox value={value} onChange={setValue}>Common checkbox</DuiCheckBox>
        </div>

        <div className="flex flex-col gap-2">
          <p>Thin</p>
          <DuiCheckBox value={value} onChange={setValue} thin accent>Accent checkbox</DuiCheckBox>
          <DuiCheckBox value={value} onChange={setValue} thin secondary>Secondary checkbox</DuiCheckBox>
          <DuiCheckBox value={value} onChange={setValue} thin alert>Alert checkbox</DuiCheckBox>
          <DuiCheckBox value={value} onChange={setValue} thin>Common checkbox</DuiCheckBox>
        </div>

        <div className="flex flex-col gap-2">
          <p>Box</p>
          <DuiCheckBox value={value} onChange={setValue} box accent>Accent checkbox</DuiCheckBox>
          <DuiCheckBox value={value} onChange={setValue} box secondary>Secondary checkbox</DuiCheckBox>
          <DuiCheckBox value={value} onChange={setValue} box alert>Alert checkbox</DuiCheckBox>
          <DuiCheckBox value={value} onChange={setValue} box>Common checkbox</DuiCheckBox>
        </div>

        <div className="flex flex-col gap-2">
          <p>Disabled</p>

          <DuiCheckBox value={value} onChange={setValue} disabled>Common checkbox</DuiCheckBox>
          <DuiCheckBox value={value} onChange={setValue} thin disabled>Common checkbox</DuiCheckBox>
          <DuiCheckBox value={value} onChange={setValue} box disabled>Common checkbox</DuiCheckBox>
        </div>
      </div>
    </DuiContainer>
  );
}

export default CheckBoxes;
