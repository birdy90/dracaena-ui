import { useState } from 'react';
import DuiRadioGroup, { DuiRadioValue } from '../components/DuiRadioGroup';
import DuiContainer from '../components/layout/DuiContainer';

const sampleData: PotterData[] = require('../constants/sample-data.json');

type PotterData = {
  house: string,
  name: string,
};

function CheckBoxes() {
  const [value, setValue] = useState<DuiRadioValue>(false);

  const options = sampleData.slice(0, 4).map((t) => ({ title: t.name, value: t.name }));

  return (
    <DuiContainer centered className="flex flex-col gap-2">
      <h2>Radio buttons</h2>

      <div className="flex flex-wrap gap-2">
        <div>
          <p>Accent</p>
          <DuiRadioGroup value={value} onChange={setValue} options={options} accent />
        </div>

        <div>
          <p>Secondary</p>
          <DuiRadioGroup value={value} onChange={setValue} options={options} secondary />
        </div>

        <div>
          <p>Alert</p>
          <DuiRadioGroup value={value} onChange={setValue} options={options} alert />
        </div>

        <div>
          <p>Common</p>
          <DuiRadioGroup value={value} onChange={setValue} options={options} />
        </div>

        <div>
          <p>Disabled</p>
          <DuiRadioGroup value={value} onChange={setValue} options={options} disabled />
        </div>
      </div>
    </DuiContainer>
  );
}

export default CheckBoxes;
