import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tomorrow } from "./Tomorrow";
import { NextDays } from "./NextDays";

export const Weather = () => {
  const [lang, setLang] = useState("eesti");
  const [showTomorrowData, setShowTomorrowData] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  console.log(data, "data value");

  useEffect(() => {
    const getForecastData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/forecasts?lang=${lang}`);

        setData(res.data.forecast);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getForecastData();
  }, [lang]);

  useEffect(() => {
    const handleDataToShow = ([tomorrow, ...rest]) => {
      let flData;

      if (showTomorrowData) {
        flData = [tomorrow];
      } else {
        flData = [...rest];
      }
      setFilterData(flData);
    };

    if (data) {
      handleDataToShow(data);
    }
  }, [showTomorrowData, data]);
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status"></div>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div>
            <button
              type="button"
              className="btn btn-outline-success m-2"
              onClick={() => setShowTomorrowData(true)}
            >
              Tomorrow
            </button>

            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => setShowTomorrowData(false)}
            >
              NextDays
            </button>
          </div>

          <div
            className="d-flex  align-items-center"
            style={{ cursor: "pointer" }}
          >
            <img
              alt="estonia"
              src={require("../assets/estonia.png")}
              onClick={() => setLang("eesti")}
              width="30px"
              height="20px"
              className="mr-2"
            />
            <img
              alt="estonia"
              src={require("../assets/united-kingdom.png")}
              onClick={() => setLang("eng")}
              width="30px"
              height="20px"
              className="m-2"
            />

            <img
              alt="estonia"
              src={require("../assets/russian.png")}
              onClick={() => setLang("rus")}
              width="30px"
              height="20px"
            />
          </div>
        </div>
      </nav>

      {showTomorrowData ? (
        <Tomorrow data={filterData} lang={lang} />
      ) : (
        <NextDays data={filterData} lang={lang} />
      )}
    </div>
  );
};
