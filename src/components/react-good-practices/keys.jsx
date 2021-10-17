import React from "react";

const USERS = ["Donjo", "Smith", "Faf"];

const Keys = () => {
  return (
    <>
      <GenerallyDo />
      <GoodPractice />
    </>
  );
};

const GenerallyDo = () => {
  return (
    <ul>
      {USERS.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
};

const GoodPractice = () => {
  return (
    <ul>{React.Children.toArray(USERS.map((user) => <li>{user}</li>))}</ul>
  );
};

export default Keys;
