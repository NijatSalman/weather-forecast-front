import React,{useEffect,useState} from 'react'
import { Night } from './Night'
import {Day} from './Day'

export const NextDays = ({data}) => {
    const [filteredDayOrNightData,setFilteredDayOrNightData]=useState([])
    const [showDayData,setShowDayData]=useState(true)
   
    useEffect(()=>{
        const handleDataToShowDayOrNight=(data)=>{
            let flDayOrNightData;
            if(showDayData){
                flDayOrNightData=data.map((d) => d.day)
            }else{
                flDayOrNightData=data.map((d) => d.night)
            }
            setFilteredDayOrNightData(flDayOrNightData)
        }
        if(data){
            handleDataToShowDayOrNight(data)
        }
    },[showDayData,data])
   
    return (
        <div>
            NextDays
            <ul>
            {data.map((d)=>{
                return(
                    <li key={1}>{d.date}</li>
                )
            })}
            </ul>
            <button onClick={()=>setShowDayData(true)}>Day</button>
            <button onClick={()=>setShowDayData(false)}>Night</button>
            {showDayData ? <Day data={filteredDayOrNightData}/> : <Night data={filteredDayOrNightData}/>}
        </div>
    )
}
