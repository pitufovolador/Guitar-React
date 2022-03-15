import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { removeCarrito } from "../store/carrito";
import ButtonCart from "./ButtonCart";

const ListItem = ( { product} ) =>{

    let [guitar, setGuitar] = useState("")

    useEffect(()=>{
        
        axios(`http://localhost:3001/api/product/${product.id}`)
        .then((res) => res.data)
        .then((data)=> setGuitar(data) )
    },[])

    return (
        <>
            <Link to={"/guitar/" + guitar.id}>
            <div className="list-item-cart">
                <hr/>
               <div>
                    <img src={guitar.imagen} alt={guitar.nombre} height="100px" width="80px"/>
                </div>
               <div>
                    <p > <strong>{guitar.nombre} </strong></p>
                    <p > <strong>u$s {guitar.precio} </strong></p>
                    <p > {guitar.categorias} </p>
                </div>
            </div>
            </Link>
            <ButtonCart product= {product}/>
        </>
    )
};

export default ListItem;