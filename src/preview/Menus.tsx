import DuiMenu, { IDuiLink } from '../components/DuiMenu';
import DuiContainer from '../components/layout/DuiContainer';

const sampleData: PotterData[] = require('../constants/sample-data.json');

type PotterData = {
  house: string,
  name: string,
};

function Menus() {
  const allHouses = sampleData.map((t) => t.house).filter((t) => t);
  const houses = Array.from(new Set(allHouses)) as string[];

  const menu = houses.map((t): IDuiLink => ({
    title: t,
    href: `/house/${t.toLowerCase()}`,
  }));
  const multilevelMenu = houses.map((t): IDuiLink => ({
    title: t,
    href: `/house/${t.toLowerCase()}`,
    links: sampleData.filter((c) => c.house === t).map((c) => ({
      title: c.name,
      href: `/person/${c.name.toLowerCase().replace(' ', '-')}`,
    })),
  }));

  return (
    <DuiContainer centered className="flex flex-col gap-2">
      <h2>Menus</h2>

      <p>Single level</p>
      <div className="flex items-center gap-8">
        <span className="text-stone-400">Accent</span>
        <DuiMenu links={menu} />
      </div>
      <div className="flex items-center gap-8">
        <span className="text-stone-400">Secondary</span>
        <DuiMenu secondary links={menu} />
      </div>
      <div className="flex items-center gap-8">
        <span className="text-stone-400">Alert</span>
        <DuiMenu alert links={menu} />
      </div>
      <div className="flex items-center gap-8">
        <span className="text-stone-400">Smaller</span>
        <DuiMenu smaller links={menu} />
      </div>

      <p>Multilevel menus</p>
      <div className="flex items-center gap-8">
        <span className="text-stone-400">Multilevel</span>
        <DuiMenu links={multilevelMenu} />
      </div>
      <div className="flex items-center gap-8">
        <span className="text-stone-400">Multilevel adaptive</span>
        <DuiMenu toggleable links={multilevelMenu} />
      </div>
      <div className="flex items-center gap-8">
        <span className="text-stone-400">Smaller multilevel</span>
        <DuiMenu smaller links={multilevelMenu} />
      </div>
    </DuiContainer>
  );
}

export default Menus;
