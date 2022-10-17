import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";

export default function TableBody() {
  const [flights, setFlights] = useState(null);

  function getFlights() {
    fetch("http://localhost:8000/flights")
      .then((res) => res.json())
      .then((flights) => setFlights(Object.values(flights.data)))
      .catch((err) => console.log(err));
  }

  useEffect(() => getFlights(), []);

  console.log(flights);

  return (
    <tbody>
      {flights?.map((flight, _index) => (
        <TableRow key={_index} flight={flight} />
      ))}
    </tbody>
  );
}
