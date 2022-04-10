import React, { JSXElementConstructor, PropsWithChildren } from 'react';

const DuiAllowedChildren = (
  WrappedComponent: React.ComponentType<any | string>,
  ...allowedType: (string | JSXElementConstructor<any>)[]
) => function (props: PropsWithChildren<any>) {
  // TODO: handle with types after changing map to toArray
  const childrenArray: React.ReactElement[] = React.Children.map(props.children, (t) => t);
  const allChildrenAreAllowed = childrenArray.filter((t: React.ReactElement) => allowedType.includes(t.type));

  return (
    <WrappedComponent {...props}>
      {allChildrenAreAllowed ? props.children : 'Component usage error'}
    </WrappedComponent>
  );
};

export default DuiAllowedChildren;
