import React, { useState } from "react";
import { Day } from "./Day";
import { Night } from "./Night";

export const Tomorrow = ({ data, lang }) => {
  const [showDayData, setShowDayData] = useState(true);

  return (
    <div class="d-flex flex-column justify-content-center mt-2">
      <div class="d-flex justify-content-center">
        <button
          class="btn btn-outline-warning"
          onClick={() => setShowDayData(true)}
        >
          <i class="fas fa-sun"></i>
        </button>
        <button
          class="btn btn-outline-dark ms-2"
          onClick={() => setShowDayData(false)}
        >
          <i class="fas fa-moon"></i>
        </button>
      </div>
      <div>
        {" "}
        {showDayData ? (
          <Day data={data} lang={lang} />
        ) : (
          <Night data={data} lang={lang} />
        )}
      </div>
    </div>
  );
};
