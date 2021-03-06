import React, { createContext,useState } from 'react'

export const DataContext=createContext();

export const DataProvider = (props) => {
    
    const [Data,setData]=useState([]);
    
    return (
        <DataContext.Provider value={[Data,setData]}>
            {props.children}
        </DataContext.Provider>
    )
}
