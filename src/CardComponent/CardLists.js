import React,{useContext,useEffect} from 'react'
import uuid from 'react-uuid'
import CardComponent from "./CardComponent"
import {DataContext} from "../Contexts/DataContext"
import "./Cards.css"

const CardLists = () => {
const [Data,setData]=useContext(DataContext);
useEffect(() => {
    console.log(Data)
}, [Data])

const deleteCard=(index)=>{
let oldArray=[...Data]
oldArray.splice(index,1)
setData(oldArray)
}
    return (
        <div className="card-container">
        <div className="cards">
        {Data.map((dataNode)=>{
                return(<CardComponent name={dataNode.name} age={dataNode.age} department={dataNode.department}
            number={dataNode.number} address={dataNode.address} key={uuid()} click={()=>deleteCard(dataNode)}
            ></CardComponent>)
            })}

        </div>
        </div>
    )
}

export default CardLists
