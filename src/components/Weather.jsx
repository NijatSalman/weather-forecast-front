import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Tomorrow } from './Tomorrow'
import { NextDays } from './NextDays'

export const Weather = () => {

  const [lang,setLang]=useState()
  const [showTomorrowData, setShowTomorrowData] = useState(true)
  const [filterData, setFilterData] = useState([])
  const [data, setData] = useState()
  //console.log(data, "data value")
  let today = new Date();
  let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000)).toISOString().split('T')[0];
  console.log(tomorrow)



  useEffect(() => {
    const getForecastData = async () => {
      const res = await axios.get(`/api/forecasts?lang=${lang}`)
      //console.log(res)
      setData(res.data.forecast)
    }
    getForecastData()
  }, [lang])

  useEffect(() => {
    const handleDataToShow = (data) => {
      let flData;

      if (showTomorrowData) {
        flData = data.filter((d) => d.date === tomorrow)
      } else {
        flData = data.filter((d) => d.date !== tomorrow)
      }
      setFilterData(flData)
      //console.log(flData)
    }

    if (data) {
      handleDataToShow(data)
    }
  }, [showTomorrowData, data])

  return (
    <div>
      <button onClick={()=>setLang("eng")}>ENG</button>
      <button onClick={()=>setLang("eesti")}>Eesti</button>
      <button onClick={()=>setLang("rus")}>Rus</button>
      <button onClick={() => setShowTomorrowData(true)}>Tomorrow</button>
      <button onClick={() => setShowTomorrowData(false)}>NextDays</button>
      {showTomorrowData ? <Tomorrow data={filterData} lang={lang}/> : <NextDays data={filterData} />}
    </div>
  )
}