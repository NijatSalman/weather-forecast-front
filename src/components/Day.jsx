import React from "react";

export const Day = ({ data, lang }) => {
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
                        <p>Name:{p.name}</p>
                        <p>Temperature:{dt.day.tempmax}</p>
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
