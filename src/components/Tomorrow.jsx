import React,{useEffect,useState} from 'react'
import {Day} from './Day'
import {Night} from './Night'

export const Tomorrow = ({ data, lang }) => {
    const [showDayData, setShowDayData] = useState(true)
    const [filteredDayOrNightData,setFilteredDayOrNightData]=useState([])
    // const day = data.map((d) => d.day)
    // const night = data.map((d) => d.night)
    // const place = day.map((p) => p.place)
    // const placeName = place.map((n) => n.name)
    // console.log(day.text)
    // console.log(place)
    // console.log(placeName)

    useEffect(()=>{
        
        const handleDataToShowDayOrNight=(data)=>{
            let flDayOrNightData;
            if(showDayData){
                flDayOrNightData=data.map((d) => d.day)
            }else{
                flDayOrNightData=data.map((d) => d.night)
            }
            setFilteredDayOrNightData(flDayOrNightData)
            console.log(flDayOrNightData)
        }

        if(data){
            handleDataToShowDayOrNight(data)
        }
    }, [showDayData,data])


    return (

        <div>
            Tomorrow
            <ul>
                {data.map((d) => {

                    return (
                        <li key={d.date}>{lang === "eng" ? "date" : lang === "rus" ? "Дата" : "kuupäev"}{d.date}</li>
                    )
                })}
            </ul>
            <button onClick={() => setShowDayData(true)}>Day</button>
            <button onClick={() => setShowDayData(false)}>Night</button>
            {showDayData ? <Day data={filteredDayOrNightData}/> : <Night data={filteredDayOrNightData}/>}
        </div>
    )
}
