import React from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "tokyo", "london", "paris"];
  const HandlClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>Not items found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li onClick={HandlClick} className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
