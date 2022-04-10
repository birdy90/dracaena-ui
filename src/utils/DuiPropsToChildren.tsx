import React, {PropsWithChildren} from "react";

const DuiPropsToChildren = (
  WrappedComponent: React.ComponentType<any | string>,
  joinMethod: ((p1: object, p2: object) => object) | null = null
) => {
  return (props: PropsWithChildren<any>) => {
    // TODO: handle with types after changing map to toArray
    const childrenArray: React.ReactElement[] = React.Children.map(props.children, t => t);

    const propsWithoutChildren = {...props};
    delete propsWithoutChildren.children;

    const joinProps = joinMethod ? joinMethod : (groupProps: object, buttonProps: object) => {
      const newGroupProps = {...groupProps};
      return {...newGroupProps, ...buttonProps};
    }

    return (
      <WrappedComponent {...props}>
        {childrenArray.map((t, i: number) => {
          let Child = t.type;
          let joinedProps = joinProps(propsWithoutChildren, t.props);
          return <Child
            {...joinedProps}
            key={i}
          />;
        })}
      </WrappedComponent>
    );
  }
}

export default DuiPropsToChildren;
