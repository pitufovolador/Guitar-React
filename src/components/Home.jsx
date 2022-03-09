import React from "react";
import { useEffect } from "react"
import productos from "./products.json"
import axios from "axios"
import Details from "../commons/Details"
import Tiles from "../commons/Tiles"

const Home = () => {
    
  useEffect( ()=> {
    axios
    .get("http://localhost:3001/api/product/guitar")
    .then(res => res.data)
    .then(data => console.log(data) )
    console.log( "Los productos seran importados desde aqui" )
  }, [] )
  
  return (
    <div className = "grilla container is-fluid" >
      {productos.map( (producto, i) => {
        return (
          <Tiles producto = { producto } key = {i}/>
        )
      })}  
    </div>
  )
}

 
 export default Home

