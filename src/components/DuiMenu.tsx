import React, { useState } from 'react';
import { Close, KeyboardArrowDown, Menu } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import IDuiColors from '../interfaces/IDuiColors';

interface IDuiLink {
  title: string,
  href: string,
  target?: string,
  links?: IDuiLink[],
}

type OptionProps = {
  className?: string,
  onClick?: () => void,
};

function DuiLink(props: OptionProps & IDuiLink & IDuiColors) {
  let colors = { common: 'text-emerald-500', hover: 'hover:text-emerald-500' };
  if (props.secondary) colors = { common: 'text-amber-500', hover: 'hover:text-amber-500' };
  if (props.alert) colors = { common: 'text-red-500', hover: 'hover:text-red-500' };

  const navLinkClasses = (e: { isActive: boolean }) => {
    const classes = [colors.hover, props.className, 'whitespace-nowrap'];
    if (e.isActive) {
      classes.push(colors.common);
    }
    return classes.join(' ');
  };

  return (
    <NavLink
      className={navLinkClasses}
      to={props.href}
      onClick={props.onClick}
    >
      { props.title }
    </NavLink>
  );
}

type Props = {
  className?: string;
  nested?: boolean;

  links: IDuiLink[],
  toggleable?: boolean
  smaller?: boolean
};

function DuiMenu(props: Props & IDuiColors) {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const stateClasses = () => {
    let classes = 'inline-flex';

    if (props.toggleable && !isMenuVisible) classes = 'hidden lg:inline-flex';
    else if (props.toggleable && isMenuVisible) {
      classes = `
      flex fixed flex-col items-center top-0 left-0 w-full h-full bg-white py-4 px-4 sm:px-8
      lg:relative lg:flex-row lg:inline-flex z-20)`;
    }

    return classes;
  };

  const smallerNavClasses = props.nested ? 'text-md gap-1' : 'text-xl gap-4';
  const biggerNavClasses = props.nested ? 'text-lg gap-1' : 'text-2xl gap-8';
  const navClasses = `text-stone-600
    ${props.smaller ? smallerNavClasses : biggerNavClasses} ${stateClasses()} ${props.className}`;

  return (
    <div>
      { props.toggleable ? (
        <Menu
          className="inline-flex lg:!hidden cursor-pointer !w-8 !h-8"
          onClick={() => setMenuVisibility(true)}
        />
      ) : null }

      <nav className={navClasses}>
        { isMenuVisible ? (
          <Close
            className="self-end lg:!hidden !w-8 !h-8 cursor-pointer"
            onClick={() => setMenuVisibility(false)}
          />
        ) : null }

        { props.links.map((t: IDuiLink) => (
          <div
            key={t.href}
            className={`
                        group flex relative items-center
                        ${props.toggleable ? 'flex-col lg:flex-row' : ''}
                    `}
          >
            <DuiLink
              className={`
                                py-2 w-full lg:w-auto
                                ${props.nested ? '' : 'text-center'}
                            `}
              onClick={() => setMenuVisibility(false)}
              {...t}
              {...{
                accent: props.accent,
                secondary: props.secondary,
                alert: props.alert,
              }}
            />

            { t.links ? (
              <>
                <KeyboardArrowDown className={`
                                group-hover:rotate-180 !transition-transform
                                ${props.toggleable ? 'hidden lg:block' : ''}
                            `}
                />

                <DuiMenu
                  className={`
                                    ${props.toggleable ? `
                                        lg:absolute flex lg:hidden
                                    ` : 'absolute hidden'}
                                    top-full left-0 flex-col hidden group-hover:flex
                                    bg-white py-2 px-4 rounded-xl shadow-xl border border-stone-100 z-30
                                `}
                  {...{ nested: true }}
                  links={t.links}
                  {...{
                    accent: props.accent,
                    secondary: props.secondary,
                    alert: props.alert,
                  }}
                />
              </>
            ) : null }
          </div>
        ))}

      </nav>
    </div>
  );
}

export default DuiMenu;

export { IDuiLink };
