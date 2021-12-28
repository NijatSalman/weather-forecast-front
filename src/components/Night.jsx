import React from "react";

export const Night = ({ data, lang }) => {
  return (
    <div>
      Night
      <ul>
        {data.map((dt) => {
          return (
            <div key={dt.date}>
              <p>Date:{dt.date}</p>
              <ul>
                {dt.night.place ? (
                  dt.night.place.map((p) => {
                    return (
                      <div key={p.name}>
                        <p>Name:{p.name}</p>
                        <p>Temprature : {p.tempmin}</p>
                        <p>{dt.night.text}</p>
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <p>Temperature:{dt.night.tempmin}/{dt.night.tempmax}</p>
                    <p>{dt.night.text}</p>
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
