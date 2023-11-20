import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import NavBar from "./NavBar"
import DogDetail from "./DogDetail"

function DogList ({data}){
    
    return (
        <div className="DogList">
        <BrowserRouter>
        <NavBar props={data.dogs}></NavBar>
        <Routes>
            {data.dogs.map(el => (
                 <Route path={`/dogs/${el.name}`} element={<DogDetail data={el}></DogDetail>}></Route> ))}
       

                <Route path={`/*`} element={<Navigate replace to="/dogs"></Navigate>}></Route> 
        </Routes>
        
      

        </BrowserRouter>
        </div>
       
    )
}

export default DogList