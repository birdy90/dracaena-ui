import DuiSelect, {IDuiSelectOption, SelectOptionProps} from "../components/DuiSelect";
import DuiContainer from "../components/layout/DuiContainer";
import {useState} from "react";

type PotterData = {
  house: string,
  name: string,
}

const CustomSelectOption = (props: SelectOptionProps) => {
  const item = props.option.value;

  const houseStyles = (letter: string): {} => {
    switch (letter) {
      case 'G':
        return {
          background: '#740001',
          color: '#D3A625',
        };
      case 'S':
        return {
          background: '#1A472A',
          color: '#5D5D5D',
        };
      case 'H':
        return {
          background: '#FFD800',
          color: '#000000',
        };
      case 'R':
        return {
          background: '#0E1A40',
          color: '#946B2D',
        };
      default:
        return {
          background: '#eee',
          color: '#777',
        };
    }
  }

  return (
    <div
      className={`
        py-2 px-4 cursor-pointer hover:bg-stone-100
        focus:bg-red-500
        ${ item.selected ? 'bg-stone-200' : '' }
      `}
      onClick={props.onSelect}
    >
      <div className="flex items-center gap-4">
        <div
          className="
            flex items-center justify-center shrink-0
            text-4xl font-bold
            rounded-full w-14 h-14
          "
          style={houseStyles(item.house[0])}
        >
          { item.house[0] }
        </div>

        <div className="flex flex-col gap-2 grow">
          <div className="text-xl font-bold">{ item.name }</div>
          <div className="flex gap-4">
            { item.alive
              ? <span className="text-emerald-500">Alive</span>
              : <span className="text-red-500">Dead</span> }
            { item.ancestry ? <span className="text-stone-400">{ item.ancestry }</span> : null }
            { item.patronus ? <span>patronus: { item.patronus }</span> : null }
          </div>
        </div>

        <img
          src={ item.image }
          alt=""
          loading="lazy"
          className="
            flex items-center justify-center shrink-0
            bg-stone-200
            rounded-full w-14 h-14
            object-cover object-top
          "
        />
      </div>
    </div>
  )
}

const SelectBoxes = () => {
  const [value, setValue] = useState<IDuiSelectOption[]>([]);
  const [value2, setValue2] = useState<IDuiSelectOption[]>([]);

  const optionsData: PotterData[] = require('../constants/sample-data.json');
  const nameOptions = optionsData.map(t => ({ title: t.name,  value: t.name }));
  const fullOptions = optionsData.map(t => ({ title: t.name,  value: t }));

  return (
    <DuiContainer centered className="flex flex-col gap-2">
      <DuiContainer narrow className="flex flex-col gap-2">
        <h2>Select boxes</h2>

        <p>
          Single select:
          <span className="mx-2 text-emerald-500 font-bold">
                        {JSON.stringify(value[0]) || "-"}
                    </span>
        </p>

        <DuiSelect
          value={value}
          options={nameOptions}
          placeholder="Single value select"
          onChange={(val) => setValue(val)}
        />

        <p>
          Multiple select:
          <span className="mx-2 text-emerald-500 font-bold">
                        {JSON.stringify(value2 || [])}
                    </span>
        </p>

        <DuiSelect
          value={value2}
          options={nameOptions}
          placeholder="Multiple value select"
          onChange={setValue2}
          multiselect
        />

        <p>Colored</p>

        <DuiSelect
          value={[]}
          options={nameOptions}
          placeholder="Accent select"
          onChange={() => {}}
          accent
        />

        <DuiSelect
          value={[]}
          options={nameOptions}
          placeholder="Accent select"
          onChange={() => {}}
          secondary
        />

        <DuiSelect
          value={[]}
          options={nameOptions}
          placeholder="Accent select"
          onChange={() => {}}
          alert
        />

        <p>Readonly / Disabled selects</p>

        <DuiSelect
          value={[]}
          options={nameOptions}
          placeholder="Readonly select"
          onChange={() => {}}
          readonly
        />

        <DuiSelect
          value={[]}
          options={nameOptions}
          placeholder="Disabled select"
          onChange={() => {}}
          disabled
        />

        <p>Select with custom option field</p>

        <DuiSelect
          value={[]}
          options={fullOptions}
          placeholder="Custom options"
          onChange={() => {}}
          optionComponent={CustomSelectOption}
        />
      </DuiContainer>
    </DuiContainer>
  );
};

export default SelectBoxes;
