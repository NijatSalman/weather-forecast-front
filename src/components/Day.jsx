import React from "react";

export const Day = ({ data, lang }) => {
 // <li key={d.date}>{lang==="eng" ? "date" : lang==="rus" ? "Дата" : "kuupäev" }{d.date}</li>
  return (
    <div>
      Day
      <ul>
        {data.map((dt) => {
          return (
            <div key={dt.date}>
              <p>Date:{dt.date}</p>
              <ul>
                {dt.day.place ? (
                  dt.day.place.map((p) => {
                    return (
                      <div key={p.name}>
                        <p>{lang==="eng" ? "City" : lang==="rus" ? "город" : "linn"}:{p.name}</p>
                        <p>{lang==="eng" ? "temperature" : lang==="rus" ? "температура" : "temperatuuri"}:{dt.day.tempmax}</p>
                        <p>{dt.day.text}</p>
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <p>Temperature:{dt.day.tempmin}/{dt.day.tempmax}</p>
                    <p>{dt.day.text}</p>
                  </div>
                )}
              </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
