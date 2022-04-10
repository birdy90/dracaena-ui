import React, { ReactElement, useState } from 'react';
import DuiAllowedChildren from '../utils/DuiAllowedChildren';
import DuiAccordionItem, { DuiAccordionItemProps } from './partials/DuiAccordionItem';

type Props = {
  single?: boolean,
  children: ReactElement<DuiAccordionItemProps>[],
};

function DuiAccordion(props: Props) {
  const childrenArray = React.Children.map(props.children, (t) => t);
  const [openedArray, setOpened] = useState(childrenArray.map((t) => t.props.isOpened));

  const toggleOpened = (i: number) => {
    const newState = !openedArray[i];
    const newOpened = props.single
      ? openedArray.map(() => false)
      : [...openedArray];

    newOpened[i] = newState;
    setOpened(newOpened);
  };

  return (
    <div className="flex flex-col">
      {childrenArray.map((t, i) => {
        const Child = t.type;
        return (
          <Child
            {...t.props}
            isOpened={openedArray[i]}
            toggleOpened={() => toggleOpened(i)}
            key={i + t.props.title}
          />
        );
      })}
    </div>
  );
}

const WithAllowedChildren = DuiAllowedChildren(DuiAccordion, DuiAccordionItem);

export default WithAllowedChildren;
