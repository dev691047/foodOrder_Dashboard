// import { useEffect } from "react";

import { useEffect, useState } from "react";

const ListItems = (prop) => {
  const [click, setClick] = useState(false);

  const deleteHander = () => {
    setClick(!click);
    console.log(" outside clicked");
  };
  useEffect(() => {
    if (click === true) {
      console.log(" inside clicked");
      prop.handleClick(prop.id);
    }
  });

  return (
    <>
      <h2>*table {prop.table}</h2>
      <span>{`${prop.dish} ${prop.price}  `}</span>
      <button onClick={deleteHander}>delete</button>
    </>
  );
};
export default ListItems;
