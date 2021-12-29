import React from "react";

export const Day = ({ data, lang, isNextDay }) => {
  return (
    <div>
      <ul>
        {data.map((dt) => {
          return (
            <div key={dt.date}>
              <h3 class="text-center mt-2">
                {lang === "eng" ? "Date" : lang === "rus" ? "Дата" : "Kuupäev"}: {dt.date}
              </h3>
              <div class="row">
                {dt.day.place ? (
                  dt.day.place.map((p) => {
                    return (
                      <div class="col-md-4 mt-2" key={p.name}>
                        <div class="card">
                          <div class="card-body text-center">
                            <h5 class="card-title">
                              {lang === "eng"
                                ? "City"
                                : lang === "rus"
                                ? "город"
                                : "linn"}
                              : {p.name}
                            </h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                              {lang === "eng"
                                ? "temperature"
                                : lang === "rus"
                                ? "температура"
                                : "temperatuuri"}
                              :{p.tempmax}
                            </h6>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div class="card">
                    <div class="card-body text-center">
                      <h5>
                        {lang === "eng"
                          ? "temperature"
                          : lang === "rus"
                          ? "температура"
                          : "temperatuuri"}{" "}
                        : {dt.day.tempmin}/{dt.day.tempmax}
                      </h5>
                      <p class="card-text">{dt.day.text}</p>
                    </div>
                  </div>
                )}
              </div>
              {!isNextDay && (
                <div>
                  <div class="card mt-2 text-center">
                    <div class="card-body">
                      <p class="card-text">{dt.day.text}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
