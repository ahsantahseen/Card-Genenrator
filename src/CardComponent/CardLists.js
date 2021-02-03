import React,{useContext} from 'react'
import uuid from 'react-uuid'
import CardComponent from "./CardComponent"
import {DataContext} from "../Contexts/DataContext"

const CardLists = () => {
const [Data,setData]=useContext(DataContext);
    return (
        <div>
            {Data.map((dataNode)=>{
                return(<CardComponent name={dataNode.name} age={dataNode.age} department={dataNode.department}
            number={dataNode.number} address={dataNode.address} key={uuid()}
            ></CardComponent>)
            })}

        </div>
    )
}

export default CardLists
