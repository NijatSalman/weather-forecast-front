import React from "react"

export const Day = ({data}) => {
    // const places=data.map((p)=>p.place)
    
    // console.log(places.map(p=>p.name))
    return (
        <div>
            Day
            <ul>
            {data.map((d)=>{
                {console.log(d.place.length)}
                // for(let i=0; i<d.place.length;i++){
                    
                // }
                return(
                    // <li key={1}>{d.text}</li>
                    <li key={2}>{d.place.map(p=>p.name)}</li>
                    
                )
            })}
            </ul>
            
        </div>
    )
}