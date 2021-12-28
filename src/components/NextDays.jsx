import React, { useState } from "react";
import { Night } from "./Night";
import { Day } from "./Day";

export const NextDays = ({ data }) => {
  const [showDayData, setShowDayData] = useState(true);

  return (
    <div>
      NextDays
      <button onClick={() => setShowDayData(true)}>Day</button>
      <button onClick={() => setShowDayData(false)}>Night</button>
      {showDayData ? <Day data={data} /> : <Night data={data} />}
    </div>
  );
};
