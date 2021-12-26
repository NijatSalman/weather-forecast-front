import React from "react"


export const Night = ({data}) => {
    return (
        <div>
            Night
            <ul>
            {data.map((d)=>{
                return(
                    <li key={1}>{d.phenomenon}</li>
                )
            })}
            </ul>
            
        </div>
    )
}