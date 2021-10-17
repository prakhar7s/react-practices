import React from "react";

const ChildrenExample = () => {
  return (
    <>
      <ChildrenComponent />
    </>
  );
};

const ParentComponent = (props) => {
  return (
    <>
      {props.children.map((child) => (
        <child.type key={child.props.id}> {child.props.children} </child.type>
      ))}
    </>
  );
};

const ChildrenComponent = () => {
  return (
    <ParentComponent>
      <h1 id="1">Hello</h1>
      <h2 id="2">Hello</h2>
      <h3 id="3">Hello</h3>
    </ParentComponent>
  );
};

export default ChildrenExample;
