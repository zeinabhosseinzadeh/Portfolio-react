import React from "react";

export default function List({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-neutral-700">
          {item}
        </li>
      ))}
    </ul>
  );
}
