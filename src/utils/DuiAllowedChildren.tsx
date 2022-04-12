import React, { JSXElementConstructor, PropsWithChildren } from 'react';

const DuiAllowedChildren = (
  WrappedComponent: React.ComponentType<any | string>,
  ...allowedType: (string | JSXElementConstructor<any>)[]
) => function (props: PropsWithChildren<any>) {
  // TODO: handle with types after changing map to toArray
  const childrenArray: React.ReactElement[] = React.Children.map(props.children, (t) => t);
  const allChildrenAreAllowed = childrenArray
    .every((t: React.ReactElement) => allowedType.includes(t.type));

  return (
    <WrappedComponent {...props}>
      {allChildrenAreAllowed ? props.children : (
        <div className="flex items-center rounded-full h-10 px-4 border-2 border-red-500 text-red-500">
          Component usage error
        </div>
      )}
    </WrappedComponent>
  );
};

export default DuiAllowedChildren;
