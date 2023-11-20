import React from "react"
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom"
import NavBar from "./NavBar"
import DogDetail from "./DogDetail"

function DogList ({data}){
    
    return (
        <div className="DogList">
        <BrowserRouter>
        <NavBar props={data.dogs}></NavBar>
        <Routes>
            {data.dogs.map(el => (
                 <Route path={`/${el.name}`} element={<DogDetail data={el}></DogDetail>}></Route> ))}
       

                <Route path={`/`}></Route> 
        </Routes>
        
      

        </BrowserRouter>
        </div>
       
    )
}

export default DogList