import React from "react";
import TableCell from "./TableCell";

export default function TableRow({ flight }) {
  const words = Object.values(flight);

  console.log(words);

  return (
    <tr>
      <td>🛫</td>
      {words?.map((word, _index) => (
        <TableCell key={_index} word={word} />
      ))}
    </tr>
  );
}
