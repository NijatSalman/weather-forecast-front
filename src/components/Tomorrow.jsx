import React, { useState } from "react";
import { Day } from "./Day";
import { Night } from "./Night";

export const Tomorrow = ({ data, lang }) => {
  const [showDayData, setShowDayData] = useState(true);

  return (
    <div>
      Tomorrow
      <button onClick={() => setShowDayData(true)}>Day</button>
      <button onClick={() => setShowDayData(false)}>Night</button>
      {showDayData ? (
        <Day data={data} lang={lang} />
      ) : (
        <Night data={data} lang={lang} />
      )}
    </div>
  );
};
